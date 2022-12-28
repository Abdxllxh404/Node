
const express = require('express')
const ejs = require('ejs')
const formidable = require('formidable')
const fs = require('fs')
const sharp = require('sharp')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('index')
})

app.all('/upload', (request, response) => {
    if (request.method == 'GET') {
        response.render('upload')
        return
    }

    let form = new formidable.IncomingForm()  
    form.parse(request, (err, fields, files) => {
        if (err) {
            console.log('Error')
            response.end()
            return
        }

        if (files.upfile.name == '') { 
            response.render('upload')
            return                   
        }

        let upfile = files.upfile
        const dir = 'public/upload/'
        let newfile = dir + upfile.name
        let newName = upfile.name
        //ถ้าไม่ให้เขียนทับ และชื่อซ้ำ ให้สุ่มตัวเลขมาต่อท้ายชื่อไฟล์
        if (!fields.overwrite && fs.existsSync(newfile)) {
            let oldName = upfile.name.split('.')
            let r = Math.floor(Math.random() * 999999)
            oldName[0] += '_' + r
            newName = oldName.join('.')
            newfile = dir + newName
        }

        fs.renameSync(upfile.path, newfile, err => { })

        let data = {}
        //ถ้าเป็นไฟล์ชนิดรูปภาพ ให้ส่งข้อมูลไปแสดงผลที่เท็มเพลต
        if (upfile.type.match('image/')) {
            data = { 
                file: 'upload/' + newName,
                fileInfo: upfile
            }
        }
        response.render('upload', data)
    })
})

app.all('/upload-multiple', (request, response) => {
    if (request.method == 'GET') {
        response.render('upload-multiple')
        return
    }
    
    let form = new formidable.IncomingForm({multiples:true})

    form.parse(request, (err, fields, files) => {
        let upfiles = files.upfiles
        //มี 2 กรณีที่จะไม่เป็นอาร์เรย์คือ
        //ไม่ได้เลือกไฟล์ใดๆ เลย หรืออัปโหลดขึ้นมาเพียง 1 ไฟล์
        if (!Array.isArray(files.upfiles)) {
            if (files.upfiles.name == '') {  //ถ้าไม่ได้เลือกไฟล์
                response.render('upload-multiple')
                return                   
            } else {                        //อัปโหลดขึ้นมา 1 ไฟล์ ให้แปลงเป็นอาร์เรย์
                upfiles = [files.upfiles]   //เพื่อใช้วิธีจัดการเดียวกับการอัปโหลดหลายไฟล์
            }
        }

        const dir = 'public/upload/'
        let fileInfo = []   //เก็บข้อมูลของแต่ละไฟล์ เพื่อส่งไปยังเท็มเพลต
        let fileNames = []  //เก็บตำแหน่งของแต่ละไฟล์ เพื่อส่งไปยังเท็มเพลต

        for(f of upfiles) {
            let newfile = dir + f.name
            let newName = f.name
            
            if (fs.existsSync(newfile)) {        
                let oldName = f.name.split('.')
                let r = Math.floor(Math.random() * 999999)
                oldName[0] += '_' + r
                newName = oldName.join('.')
                newfile = dir + newName
            }

            fileInfo.push(f)
            fileNames.push(newName)
            fs.renameSync(f.path, newfile, err => { })
        }

        data = {fileInfo: fileInfo, fileNames: fileNames}
        response.render('upload-multiple', data)
    })
})

app.all('/upload-resize', (request, response) => {
    if (request.method == 'GET') {
        response.render('upload-resize')
        return
    } 
    let form = new formidable.IncomingForm()
    form.parse(request, (err, fields, files) => {
        if (err) {
            console.log('Error')
            response.end()
            return
        }

        if (files.upfile.name == '') { 
            response.render('upload-resize')
            return                   
        }

        let upfile = files.upfile
        const dir = 'public/upload/'
        let newfile = dir + upfile.name
        let newName = upfile.name

        if (fs.existsSync(newfile)) {
            let oldName = upfile.name.split('.')
            let r = Math.floor(Math.random() * 999999)
            oldName[0] += '_' + r
            newName = oldName.join('.')
            newfile = dir + newName
        }

        sharp(upfile.path)
        .resize({width: 120, withoutEnlargement: true})
        .toFile(newfile, err => {
            if (err) { 
                console.log(err)
            }
            
            data = { 
                file: 'upload/' + newName,
                fileInfo: upfile
            }
            response.render('upload-resize', data)
        }) 
    })
})

app.all('/upload-multiple-resize', (request, response) => {
    if (request.method == 'GET') {
        response.render('upload-multiple-resize')
        return
    }

    let form = new formidable.IncomingForm({multiples:true})

    form.parse(request, (err, fields, files) => {
        let upfiles = files.upfiles
        if (!Array.isArray(files.upfiles)) {
            if (files.upfiles.name == '') {  
                response.render('upload-multiple-resize')
                return                   
            } else {                        
                upfiles = [files.upfiles]   
            }
        }

        const dir = 'public/upload/'
        let fileInfo = []   
        let fileNames = []  

        for (f of upfiles) {
            let newfile = dir + f.name
            let newName = f.name
            
            if (fs.existsSync(newfile)) {        
                let oldName = f.name.split('.')
                let r = Math.floor(Math.random() * 999999)
                oldName[0] += '_' + r
                newName = oldName.join('.')
                newfile = dir + newName
            }

            fileInfo.push(f)
            fileNames.push(newName)
            
            sharp(f.path)
            .resize({width: 120, withoutEnlargement: true})
            .toFile(newfile, err => { 
                if (err) { console.log(err) } 
            })
        }

        //หน่วยเวลาไว้ชั่วขณะ เพื่อรอให้การเปลี่ยนขนาดเสร็จสิ้นก่อน
        setTimeout(() => {
            data = {fileInfo: fileInfo, fileNames: fileNames}
            response.render('upload-multiple-resize', data)
        }, 1500)

    })
})

app.listen(3000, err => {
    console.log('Server started on port: 3000')
})