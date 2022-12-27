
const app = require('express')()
const path = require('path')

app.get('/', (request, response) => {
    render(response, 'html/index.html')
})

app.get('/about', (request, response) => {
    render(response, 'html/about.html')
})

app.get('/products', (request, response) => {
    render(response, 'html/products.html')
})

function render(response, file) {
    response.status(200)
    response.type('text/html')
    response.sendFile(path.join(__dirname, file))
}

app.use((request, response) => {
    response.status(404)
    response.type('text/plain')
    response.send('404 Not Found')
})

app.listen(3000, () => console.log('Server started on port: 3000'))