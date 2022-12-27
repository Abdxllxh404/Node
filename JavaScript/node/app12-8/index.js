const app = require('express')()

app.get('/', (request, response) => {
    let r = Math.random()
    if (r >= 0.5) {
        response.redirect('/show-value/' + r)
    } else {
        response.redirect('/error')
    }
})

app.get('/show-value/:v', (request, response) => {
    response.type('text/html')
    response.send(`
        Value: ${request.params.v}
        <br><br>
        <a href="/">Back</a>
    `)
})

app.get('/error', (request, response) => {
    response.type('text/html')
    response.send(`
        Error value < 0.5
        <br><br>
        <a href="/">Back</a>
    `)
})

app.listen(3000, () => console.log('Server started on port: 3000'))
