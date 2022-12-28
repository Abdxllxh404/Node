
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
	secret: 'signin-signout',
	resave: false,
	saveUninitialized: false,
}))

app.get('/', (request, response) => {
    //ถ้ามีเซสชัน login แสดงว่าเข้าสู่ระบบแล้ว
    if (request.session.login) {
        let login = request.session.login;
        response.render('signin', { login: login, isValid: true })

    //ถ้ายังไม่เข้าระบบ แต่จัดเก็บข้อมูลไว้ในคุกกี้ 
    //เราต้องส่งค่าไปแสดงบนอิลิเมนต์ของฟอร์ม
    } else if (!request.body.login) {
        let login = request.cookies.login || ''
        let password = request.cookies.password || ''
        let saveCookie = request.cookies.save || ''
        response.render('signin',
            { login: login, password: password, save: saveCookie, isValid: false })
    }
})

app.all('/signin', (request, response) => {
    //อ่านข้อมูลจากฟอร์มที่ส่งเข้า
    let login = request.cookies.login || ''
    let password = request.cookies.password || ''
    let saveCookie = request.cookies.save || ''
    let signedIn = false
    let valid = false

    //กรณีที่ผู้ใช้เปิดมายังเพจนี้ แต่ได้เข้าสู่ระบบไปก่อนนี้แล้ว
    if (request.session.login) {
        let login = request.session.login;
        response.render('signin', { login: login, signedIn: true })

    //กรณีที่เปิดมายังเพจนี้ โดยไม่ได้ส่งข้อมูลจากฟอร์มเข้ามา
    } else if (!request.body.login) {
        response.render('signin',
            { login: login, password: password, save: saveCookie, signedIn: false })
    
    //กรณีที่ส่งข้อมูลจากฟอร์มเข้ามา
    } else {
        //อ่านข้อมูลจากอิลิเมนต์ของฟอร์ม
        login = request.body.login || ''
        password = request.body.password || ''
        saveCookie = request.body.save || ''

        //ถ้าใส่ข้อมูลถูกต้อง
        if (login == 'node' && password == 'express') {
            //ถ้าเลือกให้จัดเก็บข้อมูลไว้ในเครื่อง ก็บันทึกเป็นคุกกี้
            if (request.body.save) {
                let age = 10 * 60 * 1000
                response.cookie('login', login, {maxAge: age})
                response.cookie('password', password, {maxAge: age})
                response.cookie('save', saveCookie, {maxAge: age})
            
            //ถ้าไม่เลือกเก็บในเครื่อง แต่อาจมีคุกกี้เดิมเก็บไว้ ก็ให้ลบทิ้งไป
            } else {
                response.clearCookie('login')
                response.clearCookie('password')
                response.clearCookie('save')
            }

            //จัดเก็บข้อมูล login ไว้ในเซสชัน เพื่อใช้ตรวจสอบในภายหลัง
            request.session.login = login
            signedIn = true
            valid = true
        } else {
            password = ''
        }

        response.render('signin', 
            { login: login, password: password, save: saveCookie, signedIn: signedIn, valid: valid })
    }
})

app.get('/signout', (request, response) => {
    if (request.session.login) {
        request.session.destroy((err) => { })
    } 
    response.redirect('/signin')
})

app.listen(3000, () => console.log('Server started on port: 3000'))