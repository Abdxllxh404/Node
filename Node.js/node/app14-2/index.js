
const express = require('express')
const ejs = require('ejs')
const bp = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bp.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.render('add')
})

app.post('/add', (request, response) => {
    let data = {}
    if (request.body.num1) {        //!= undefined
        let num1 = request.body.num1
        let num2 = request.body.num2
        let r = parseFloat(num1) + parseFloat(num2)
        data = {
            n1: num1,
            n2: num2,
            r: r
        }
    }

    response.render('add', data)
})

app.listen(3000, () => console.log('Server started on port: 3000'))