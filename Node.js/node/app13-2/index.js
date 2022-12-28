
const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('index', {
        title: 'Homepage',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    })
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
            }
        }
    })
})

app.listen(3000, () => {
    console.log('Server started on port: 3000')
})
