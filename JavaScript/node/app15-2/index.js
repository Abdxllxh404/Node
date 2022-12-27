
const express = require('express')
const ejs = require('ejs')
const bp = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bp.urlencoded({ extended: true }))

app.use('/axios', 
	express.static(__dirname + '/node_modules/axios/dist'))

app.get('/', (request, response) => {
	response.redirect('login')
})

app.all('/login', (request, response) => {
    if (!request.body.login) {
        response.render('login')
    } else {
        if (request.xhr || request.headers.accept.indexOf('json') > -1) {
            let loginExist = false
            let users = ['admin', 'node', 'express']
            if (users.includes(request.body.login)) {
                loginExist = true
            }
            response.send({ exist: loginExist })
        } else {
            //...
        }
    }
})

app.listen(3000, () => console.log('Server started on port: 3000'))
