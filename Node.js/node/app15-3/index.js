const express = require('express')
const ejs = require('ejs')
const bp = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/axios', express.static(__dirname + '/node_modules/axios/dist'))

app.get('/', (request, response) => {
	response.redirect('bgoverlay')
})

app.all('/bgoverlay', async (request, response) => {	//***
	if (!request.body.test) {
		response.render('bgoverlay')
	} else {
		if (request.xhr || request.headers.accept.indexOf('json') > -1) {

			let delay = (time) => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve()
					}, time)
				})
			}

			await delay(2000)
			response.send({})
		} else {
			//...
		}
	}
})

app.listen(3000, () => console.log('Server started on port: 3000'))