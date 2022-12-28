
const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/search', (request, response) => {
    let query = request.query
    let data = {}

    //ถ้ามีข้อมูลส่งเข้ามา (แนบท้าย URL) 
    //ก็ส่งไปแสดงผลยังเพจที่บรรจุฟอร์มด้วย
    if (Object.keys(query).length > 0) {
        data = {
            q: query.q,
            p: query.p,
        }
    }
    response.render('search', data)
})

app.listen(3000, () => console.log('Server started on port: 3000'))