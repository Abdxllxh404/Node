
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.type('text/html')
    response.send(`
        <a href="/about.html">About</a><br>
        <a href="/static-test.html">Static Test</a>
    `)
})

app.use((request, response) => response.send('Not Found'))

app.listen(3000, () => console.log('Server started on port: 3000'))