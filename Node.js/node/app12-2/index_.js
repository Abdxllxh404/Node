
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.type('text/plain')
    response.send('home')
})

app.get('/about', (request, response) => {
    response.type('text/html')
    response.send('<h3>Node.js & Express.js</h3>')
})

app.get('/products', (request, response) => {
    response.type('text/html')
    response.send(`
        <ul>
            <li>iPhone</li>
            <li>iPad</li>
            <li>MacBook</li>
        <ul>`
    )
})

app.use((request, response) => {
    response.type('text/plain')
    response.send('404 Not Found')
})

app.listen(3000, () => console.log('Server started on port: 3000'))