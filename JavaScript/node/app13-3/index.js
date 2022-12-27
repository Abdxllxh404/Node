
const express = require('express')
const ejs = require('ejs')
const app = express()

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
	response.render('index', {title: 'Home'})
})

app.get('/products', (request, response) => {
	response.render('products', {
		title: 'Products',
		products: {
			p1: {
				name: 'JavaScript',
				price: 1000,
				color: 'yellow',
			},
			p2: {
				name: 'Node.js',
				price: 1300,
				color: 'green',
			},
			p3: {
				name: 'Express.js',
				price: 990,
				color: 'black',
			}
		}
	})
})

app.listen(3000, () => {
	console.log('Server started on port: 3000')
})
