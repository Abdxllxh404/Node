
const app = require('express')()
const path = require('path')

app.use((request, response) => {
    response.status(200)
    response.type('text/html')

    response.sendFile(path.join(__dirname, 'html/index.html'))
    
    //response.sendFile(path.resolve(__dirname, 'html/index.html'))

    /*
    const fs = require('fs')
    fs.readFile('html/index.html', (error, content) => {
        if (!error) {
            response.status(200)
            response.send(content)
        } else {
            response.status(404)
            response.send(error.message)
        }
    })
    */
})

app.listen(3000, () => console.log('Server started on port: 3000'))