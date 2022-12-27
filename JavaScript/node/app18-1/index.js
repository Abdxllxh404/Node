
const Product = require('./model')
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.render('index')
})

app.all('/add-product', (request, response) => {
    //ถ้าเปิดพาธนี้โดยไม่ได้โพสต์ข้อมูลเข้ามา
    //ให้แสดงฟอร์มรับข้อมูล
    if (!request.body.name) {
        response.render('add-product')
    
    //ถ้ามีข้อมูลโพสต์เข้ามา ให้อ่านค่า
    //แล้วนำไปเพิ่มลงในคอลเล็กชัน
    } else {
        let form = request.body
        let data = {
            name: form.name || '', 
            price: form.price || 0, 
            stock: form.stock || 0, 
            date_added: new Date(Date.parse(form.date_added)) || new Date(), 
            description: form.description || ''
        }
        
        Product.create(data, err => {
            let r = (err) ? false : true
            //หลังการเพิ่มข้อมูล ให้กลับไปแสดงฟอร์มอีกครั้ง 
            //เพื่อเพิ่มรายการถัดไป พร้อมสถานะว่าสำเร็จหรือล้มเหลว
            response.render('add-product', {result: r})
        })
    }
})

app.get('/show-products-all', (request, response) => {
    Product
    .find()
    .exec((err, docs) => {
        response.render('show-products-all', {
            data: docs
        })
    })
})

app.get('/show-products-search', (request, response) => {  
    let q = request.query.q || ''
    Product
    .find({name: { $regex: q, $options: 'i' }})
    .exec((err, docs) => {
        response.render('show-products-search', {
            data: docs, q: q
        })
    })
})

app.get('/show-products-edit', (request, response) => {
    Product
    .find()
    .exec((err, docs) => {
        response.render('show-products-edit', {
            data: docs
        })
    })
})

app.all('/edit-product/:id', (request, response) => {
    //ถ้าเรียกเข้ามาด้วยเมธอด GET พร้อมแนบค่า id
    //ก็ใช้เป็นเงื่อนไขในการอ่านข้อมูลเดิม แล้วส่งไปที่ฟอร์ม
    if (request.method == 'GET') {
        if (request.params.id) {
            Product
            .findById(request.params.id)
            .exec((err, doc) => {
                response.render('edit-product', { data: doc })
            })
        } else {
            response.render('show-products-edit')
        }
    
    //ถ้าโพสต์ข้อมูลจากฟอร์มเข้ามา (หลังการแก้ไข)
    //ก็อ่านค่าจากแต่ละอิลิเมนต์ แล้วนำไปแก้ไขข้อมูลเดิม
    } else if (request.method == 'POST') {
        let form = request.body
        let data = {
            name: form.name || '', 
            price: form.price || 0, 
            stock: form.stock || 0,
            date_added: new Date(Date.parse(form.date_added)) || new Date(), 
            description: form.description || ''
        }
        
        Product
        .findByIdAndUpdate(request.params.id, data, {useFindAndModify: false})
        .exec(err => {
            //หลังการแก้ไข กลับไปแสดงผลที่เพจเดิม
            response.redirect('/show-products-edit')
        })        
    }
})

app.get('/delete-product/:id', (request, response) => {
    if (request.params.id) {
        Product
        .findByIdAndDelete(request.params.id, {useFindAndModify: false})
        .exec(err => {
            //หลังการแก้ไข กลับไปแสดงผลที่เพจเดิม
            response.redirect('/show-products-edit')
        })
    }
})

app.get('/show-products-paging-pn', (request, response) => {
    let options = {
        page: request.query.page || 1,     //เพจปัจจุบัน
        limit: 2     //แสดงผลหน้าละ 2 รายการ (ข้อมูลมีน้อย)               
    }

    Product
    .paginate({}, options, (err, result) => {
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

        if (result.page < result.totalPages) {  //ถ้าไม่ใช่หน้าสุดท้าย ให้สร้างลิงก์ไปยังหน้าสุดท้าย
            links.push(`<a href="${request.path}?page=${result.totalPages}">หน้าสุดท้าย</a>`)
        }

        //นำลิงก์ในอาร์เรย์มาเชื่อมต่อกันเป็นสตริง
        let pageLink = links.join('  -  ')  //ผลลัพธ์เป็น HTML String
        
        //ส่งรายการข้อมูลในเพจนั้น หมายเลขเพจปัจจุบัน 
        //และลิงก์ที่ใช้เลื่อนระหว่างเพจ ไปแสดงผลที่เท็มเพลต
        response.render('show-products-paging-pn', {
            data: result.docs, page: result.page, pageLink: pageLink
        })
    })
})

app.get('/show-products-paging-no', (request, response) => {
    let options = {
        page: request.query.page || 1,
        limit: 2 
    }

    Product
    .paginate({}, options, (err, result) => {
        let links = []
        //สร้างลิงก์ไปยังเพจต่างๆ 
        for (i = 1; i <= result.totalPages; i++) {
            if (i == result.page) {    //เพจปัจจุบันไม่ทำลิงก์
                links.push(i)
            } else {
                links.push(`<a href="${request.path}?page=${i}">${i}</a>`)
            }
        }

        let pageLink = links.join('  -  ') 
        
        response.render('show-products-paging-no', {
            data: result.docs, pageLink: pageLink
        })
    })
})

app.listen(3000, () => console.log('Server started on port: 3000'))

