
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.send('Hello, This is my homepage')
})

router.get('/contact', (request, response) => {
    response.send('Send mail to me@example.com')
})

router.get('/member/signin', (request, response) => {
    response.send('Under construction!')
})

const app = express()
app.use(router).listen(3000, () => console.log('Server started on port: 3000'))
