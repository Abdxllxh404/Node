
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.type('text/html')
    response.send(`
        <a href="/product-detail/24680">Product Detail</a><br>
        <a href="/search/node.js & express.js/5">Search</a><br>
        <a href="/map/10.1122,50.5678/satellite/zoom=16">View Map</a>
    `)
})

app.get('/product-detail/:id', (request, response) => {
    response.send('Product Id: ' + request.params.id)
})

app.get('/search/:q/:page', (request, response) => {
    response.type('text/html')
    response.send(`
        show results for: ${request.params.q} <br>
        on page: ${request.params['page']}
    `)
})

app.get('/map/:lat,:lon/:type/zoom=:zoom', (request, response) => {
    response.type('text/html')
    response.send(`
        latitude: ${request.params['lat']} <br>
        longitude: ${request.params['lon']} <br>
        type: ${request.params.type} <br>
        zoom: ${request.params.zoom}
    `)
})

app.use((request, response) => {
    response.send('Error 404: Not Found')
})

app.listen(3000, () => console.log('Server started on port: 3000'))