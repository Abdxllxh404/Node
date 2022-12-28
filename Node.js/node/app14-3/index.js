const express = require('express')
const ejs = require('ejs')
const bp = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bp.urlencoded({ extended: true }))

app.get('/', (request, response) => {
	response.redirect('add-product')
})

app.all('/add-product', (request, response) => {
	let form = request.body
	let data = {}
	if (form.product) {  	//ถ้ามีข้อมูลส่งเข้ามา (!= undefined)
		data = {
			data: true,		//สำหรับตรวจสอบสถานะข้อมูล
			product: form.product,
			price: form.price,
			quantity: form.quantity,
			descr: form.description,
			date_add: form.date_add.split('-').reverse().join('-'),
		}	//เปลี่ยนจาก yyyy-mm-dd เป็น dd-mm-yyyy
	}
	
	response.render('add-product', data)
})

app.listen(3000, () => console.log('Server started on port: 3000'))
