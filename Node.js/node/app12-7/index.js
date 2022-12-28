
const app = require('express')()

app.get('/', (request, response) => {
    response.type('text/html')
    response.send(`
        <a href="/member/signin">Member Signin</a><br>
        <a href="/search?q=node.js&page=3">Search</a>
    `)
})

app.get('/member/signin', (request, response) => {
    url_info(request, response)
})

app.get('/search', (request, response) => {
    url_info(request, response)
})

function url_info(request, response) {
    response.type('text/html')
    let text = `
        hostname: ${request.hostname} <br>
        path: ${request.path} <br>
        query: ${JSON.stringify(request.query)} <br>
    `

    for (p in request.query) {
        text += `- ${p}: ${request.query[p]} <br>`
    }

    response.send(text)
}

app.listen(3000, () => console.log('Server started on port: 3000'))