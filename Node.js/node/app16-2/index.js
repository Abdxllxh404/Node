
const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
    secret: 'hello world',
    resave: false,
    saveUninitialized: false,
}))

app.get('/', (request, response) => {
    response.type('html')
    response.send(`
        <a href="/add-session">Add Session</a><br>
        <a href="/read-session">Read Session</a><br>
        <a href="/delete-session">Delete Session</a><br>
    `)
})

app.get('/add-session', (request, response) => {
    let session = request.session
    
    session.host = session.host || request.hostname

    session.cart = session.cart || []
    let r = Math.floor(Math.random() * (100))
    session.cart.push(r)
    
    session.cookie.maxAge = 3 * 60 * 1000   //3 mins

    response.type('html')
    response.send(`
        <h4>Session Added</h4>
        <a href="/">Back</a>
    `)
})

app.get('/read-session', (request, response) => {
    let session = request.session
    session.cart = session.cart || []

    response.type('html')
    response.send(`
        session id: ${request.sessionID} <br>
        host name: ${session.host || ''} <br>
        numbers in cart: ${session.cart.join(', ')}
        <br><br>
        <a href="/">Back</a>
    `)
})

app.get('/delete-session', (request, response) => {
    request.session.destroy((err) => {
        if (err) {
            console.log(err)
        }
    })
    response.type('html')
    response.send(`
        <h4>Session destroyed</h4>
        <a href="/">Back</a>
    `)
})

app.listen(3000, () => console.log('Server started on port: 3000'))