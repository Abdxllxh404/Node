
const models = require('./models')
const Question = models.Question
const Answer = models.Answer

const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const sharp = require('sharp')
const svgCaptcha = require('svg-captcha')
const session = require('express-session')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/bootstrap', 
 	    express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(session({
    secret: 'workshop-webboard',
    resave: false, saveUninitialized: false,
}))

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/captcha', (request, response) => {
	let captcha = svgCaptcha.create({size: 5, noise: 3, background: '#fff'})
	request.session.captcha = captcha.text
	response.type('svg')
	response.status(200)
	response.send(captcha.data)
})

app.all('/webboard/new-question', (request, response) => {
    if (request.method == 'GET') {
        response.render('new-question')
        return
    }
    //ใช้ formidable เพราะมีการอัปโหลดไฟล์ด้วย
    let form = new formidable.IncomingForm()
    form.parse(request, (err, fields, files) => {
        //ถ้าใส่ CAPTCHA ไม่ตรงกับค่าในเซสชัน ให้กลับที่ฟอร์ม พร้อมส่งข้อมูลเดิมกลับไปด้วย
        if (fields.captcha != request.session.captcha) {
            response.render('new-question', { 
                msg: 'ใส่อักขระไม่ตรงกับภาพ', data: fields
            })
            return
        }

        //ถ้ามีไฟล์ภาพอัปโหลดขึ้นมา เราต้องดำเนินการกับภาพนั้นก่อน
        //เช่น การเปลี่ยนชื่อ การย้ายไปเก็บไว้ในโฟลเดอร์ของแอป
        //และในขั้นตอนต่อไป จะต้องนำชื่อไฟล์ภาพไปเก็บในฐานข้อมูลด้วย
        let upfile = files.upfile
        let imgFile = upfile.name

        //การตั้งชื่อไฟล์ภาพ จะไม่ใช้ชื่อเดิมของมัน
        //แต่จะนำค่าเวลาแบบ timestamp ในขณะนั้น มาตั้งชื่อไฟล์แทน
		if (imgFile != '') {  //ถ้าเลือกไฟล์
            const dir = 'public/webboard-images/'      
            let oldName = imgFile.split('.')
            oldName[0] = new Date().getTime()   
            imgFile = oldName.join('.')
            let imgPath = dir + imgFile
            
            //เปลี่ยนขนาดความกว้างของภาพ ไม่ให้เกิน 600px
            sharp(upfile.path)
            .resize({ width: 600, withoutEnlargement: true })
            .toFile(imgPath, err => { })
        }
        
        //ต่อไปอ่านข้อมูลจากฟอร์ม เพื่อเก็บลงในคอลเล็กชัน Question
		let data = {
			question: fields.question,
            detail: fields.detail,
            questioner: fields.questioner,
            date_posted: new Date(),
            num_answers: 0,
			image_file: imgFile
        }
        
		Question.create(data, (err, doc) => {
            //หลังการจัดเก็บข้อมูล ให้เปิดไปยังพาธที่สดงรายการคำถามทั้งหมด
			response.redirect('/webboard/show-all-questions')
		})
    })
})

app.get('/webboard/show-all-questions', (request, response) => {
    let q = Question.find().sort('-date_posted')    //เอาคำถามล่าสุดขึ้นก่อน
    let options = {
        page: request.query.page || 1,
        limit: 3
    }

    Question.paginate(q, options, (err, result) => {
		let links = []
		if (result.page > 1) {  //ถ้าไม่ได้อยู่ที่หน้าแรก ให้มีลิงก์สำหรับเลื่อนไปหน้าแรก
            links.push(`<a href="${request.path}?page=1">หน้าแรก</a>`)
		}       
		if (result.hasPrevPage) {   //ถ้าเลื่อนไปยังหน้าที่แล้วได้
            links.push(`<a href="${request.path}?page=${result.prevPage}">หน้าที่แล้ว</a>`)
		}
		if (result.hasNextPage) {   //ถ้าเลื่อนไปยังหน้าถัดไปได้
            links.push(`<a href="${request.path}?page=${result.nextPage}">หน้าถัดไป</a>`)
		}
		if (result.page < result.totalPages) {  //ถ้าไม่ได้อยู่หน้าสุดท้าย
            links.push(`<a href="${request.path}?page=${result.totalPages}">หน้าสุดท้าย</a>`)
		}
		//นำลิงก์ในอาร์เรย์มาเชื่อมต่อกันเป็นสตริง (ผลลัพธ์เป็น HTML String)
		let pageLink = links.join('  -  ')
        response.render('show-all-questions', { data: result.docs, pageLink: pageLink })
    })
})

app.get('/webboard/question-detail-and-answers/:id', (request, response) => {
    Question
    .findById(request.params.id)
    .exec((err, docs_question) => {
        //สร้าง query เพื่อนำไปกำหนดให้แก่ paginate
        let q = Answer
                    .find()
                    .where('question_id')
                    .equals(request.params.id)
                    .sort('-date_posted')

        let options = {
            page: request.query.page || 1,
            limit: 3
        }

        Answer.paginate(q, options, (err, result) => {
            let links = []
            if (result.page > 1) {  
                links.push(`<a href="${request.path}?page=1">หน้าแรก</a>`)
            }       
            if (result.hasPrevPage) {   
                links.push(`<a href="${request.path}?page=${result.prevPage}">หน้าที่แล้ว</a>`)
            }
            if (result.hasNextPage) {   
                links.push(`<a href="${request.path}?page=${result.nextPage}">หน้าถัดไป</a>`)
            }
            if (result.page < result.totalPages) {  
                links.push(`<a href="${request.path}?page=${result.totalPages}">หน้าสุดท้าย</a>`)
            }
            
            let pageLink = links.join('  -  ')
    
            response.render('question-detail-and-answers', { 
                data_question: docs_question, 
                data_answers: result.docs, 
                pageLink: pageLink
            })
        })
    })
})

app.post('/webboard/post-answer', (request, response) => {
    let form = request.body
    let data = {
        question_id: form.question_id,
        answer: form.answer,
        answerer: form.answerer,
        date_posted: new Date()
    }
    
    Answer
    .create(data, err => {
        //อัปเดตจำนวนคำตอบในฟิลด์ num_answers ของคอลเล็กชัน Question
        Question
        .findByIdAndUpdate(form.question_id,
            {$inc: { num_answers: 1 }}, {useFindAndModify:  false})
        .exec(err => {
            response.redirect('/webboard/question-detail-and-answers/' + form.question_id)
        })
    })
})

app.listen(3000, () => console.log('Server started on port: 3000'))