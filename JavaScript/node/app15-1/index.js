const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.use('/axios', 
	express.static(__dirname + '/node_modules/axios/dist'))

app.get('/', (request, response) => {
	response.redirect('random')
})

app.get('/random', (request, response) => {
    if (Object.keys(request.query).length == 0) {
        response.render('random')
    } else {
        if (request.xhr || request.headers.accept.indexOf('json') > -1) {
            let min = parseInt(request.query.min)
            let max = parseInt(request.query.max)
            let rand = min + Math.floor(Math.random() * ((max - min) + 1))
            response.send({result: rand})
        } else {
            //...
        }
    }
})

app.listen(3000, () => console.log('Server started on port: 3000'))
