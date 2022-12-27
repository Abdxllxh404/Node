
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const svgCaptcha = require('svg-captcha')
const session = require('express-session')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
	secret: 'captcha-test',
	resave: false,
	saveUninitialized: false,
}))

app.get('/', (request, response) => {
    response.render('form')
})

app.get('/captcha-image', (request, response) => {
    let captcha = svgCaptcha.create({size: 5, noise: 3, background: '#def' })
    request.session.captcha = captcha.text
    response.type('svg')
    response.status(200)
    response.send(captcha.data)
})

app.all('/form', (request, response) => {
    if (!request.body.captcha) {
        response.render('form')
    } else {
        let sessCaptcha = request.session.captcha
        let postCaptcha = request.body.captcha
        let r = 'คุณใส่อักขระไม่ตรงกับในภาพ'

        if (sessCaptcha == postCaptcha) {
            r = 'คุณใส่อักขระถูกต้อง'
        }
        response.render('form', { result: r })
    }
})

app.listen(3000, () => console.log('Server started on port: 3000'))