const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/', (request, response) => {
    response.type('html')
    response.send(`
        <a href="/setcookies">Set Cookies</a><br>
        <a href="/getcookies">Get Cookies</a><br>
        <a href="/clearcookies">Clear Cookies</a><br>
    `)
})

app.get('/setcookies', (request, response) => {
    response.type('html')
    let time = 5 * 60 * 1000    //5 นาที
    response.cookie('name', 'Tom Jerry', {maxAge: time})
    response.cookie('email', 'tom_jerry@example.com', {maxAge: time})
    response.cookie('year_born', 1990, {maxAge: time})
    response.send(`
        <h4>Cookies Set</h4>
        <a href="/">Back</a>
    `)
})

app.get('/getcookies', (request, response) => {
    response.type('html')
    let y = new Date().getFullYear()
    let yb = parseInt(request.cookies.year_born || y)
    response.send(`
        name => ${request.cookies.name || ''} <br>
        email => ${request.cookies['email'] || ''} <br>
        age => ${y - yb} <br><br>
        <a href="/">Back</a>
    `)
})

app.get('/clearcookies', (request, response) => {
    response.type('html')
    response.clearCookie('name')
    response.clearCookie('email')
    response.clearCookie('year_born')
    response.send(`
        <h4>Coookies Cleared</h4>
        <a href="/">Back</a>
    `)
})

app.listen(3000, () => console.log('Server started on port: 3000'))