const express = require('express')
const ejs = require('ejs')
const bp = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bp.urlencoded({ extended: true }))

app.get('/', (request, response) => {
	response.redirect('form')
})

app.all('/form', (request, response) => {
	let data = {}
    let form = request.body

	if (Object.keys(form).length > 0) {     //ถ้ามีข้อมูลส่งเข้ามา
        let fruit = '';
        if (form.fruit) {      //checkbox
            if (Array.isArray(form.fruit)) {
                fruit = form.fruit.join(', ')
            } else {
                fruit = form.fruit
            }
        }

        let flower = form.flower || ''      //radio
        let color = form.color              //single-select

        let animal = ''
        if (form.animal) {     //multiple-select
            if (Array.isArray(form.animal)) {
                animal = form.animal.join(', ')
            } else {
                animal = form.animal
            }
        }

        data = {
            data: true,   //สำหรับใช้ตรวจสอบสถานะ
            frt: fruit,
            flw: flower,
            clr: color,
            anm: animal,
		}
    }
    
	response.render('form', data)
})

app.listen(3000, () => console.log('Server started on port: 3000'))
