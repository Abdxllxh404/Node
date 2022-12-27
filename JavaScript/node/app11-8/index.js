
const http = require('http')

let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('Hello World')
    response.end()
})

server.listen(3000)
console.log('Server started on port: 3000')

//npm install nodemon
//npx nodemon index.js