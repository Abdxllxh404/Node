
const express = require('express')
const app = express()

app.use(function(request, response) {
    response.send('Hello Express')
})

app.listen(3000)
console.log('Server started on port: 3000')


/*
const app = require('express')()

app.use((request, response) => {
    response.send('Hello Express')
})

app.listen(3000, function() {
    console.log('Server started on port: 3000')
})
*/