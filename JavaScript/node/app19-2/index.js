
const Product = require('./model')

const express = require('express')
const fs = require('fs')
const formidable = require('formidable')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('index')
})

app.all('/add-product', (request, response) => {
    if (request.method == 'GET') {
        response.render('add-product')
        return
    } 
    
    let form = new formidable.IncomingForm({multiples: true})

    form.parse(request, (err, fields, files) => {
        let upfiles = files.upfiles
        if (!Array.isArray(files.upfiles)) {
            if (files.upfiles.name == '') {  //ถ้าไม่ได้เลือกไฟล์
                response.render('add-product')
                return   
            } else {		                //ถ้าเลือกไฟล์เดียว
                upfiles = [files.upfiles]   
            }
        }

        const dir = 'public/product-images/'
        let fileNames = []  //เก็บชื่อของแต่ละไฟล์
        
        for (f of upfiles) {
            let newfile = dir + f.name
            let newName = f.name
            
            while (fs.existsSync(newfile)) {        
                let oldName = f.name.split('.')
                let r = Math.floor(Math.random() * 999999)
                oldName[0] += '_' + r
                newName = oldName.join('.')
                newfile = dir + newName
            }
            fileNames.push(newName)
            fs.rename(f.path, newfile, err => { }) 
        }

        //นำชื่อไฟล์มารวมเป็นสตริงเดียวกัน
        let imgFiles = fileNames.join(',')
        let data = {
            name: fields.name,
            price: fields.price,
            images: imgFiles
        }
        Product.create(data, err => {
            response.render('add-product', {msg: 'ข้อมูลถูกบันทึกแล้ว'})
        })
    })
})

app.get('/show-products', (request, response) => {
    Product
    .find()
    .exec((err, docs) => {
        response.render('show-products', { data: docs })
    })
})

app.listen(3000, () => {
    console.log('Server started on port: 3000')
})

