const express = require('express')
const app = express()

app.use((request, response) => {
    response.status(200)
    response.type('text/html')
    response.send(`
        <!doctype html>
        <html>
        <body>
            <h3>ขั้นตอนการสร้าง Node/Express Application</h3>
            <ol>
                <li>สร้างโฟลเดอร์ที่จัดเก็บแอป</li>
                <li>ใช้คำสั่ง npm init -y</li>
                <li>ใช้คำสั่ง npm install express</li>
            <ol>
        </body>
        </html>`
    )
})

app.listen(3000)
console.log('Server started on port: 3000')