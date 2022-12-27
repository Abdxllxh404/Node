
const http = require('http')

const server = http.createServer(function(request, response) {
    response.write('Hello World')
    response.end()
})

server.listen(3000)


/*
const http = require('http')

http.createServer((request, response) => {
    response.write('Hello World')
    response.end()

}).listen(3000)

console.log('Server started on port: 3000')
*/

/*
const http = require('http')
const port = 3000

http.createServer(render).listen(port)

console.log(`Server started on port: ${port} \
            \nPress <Ctrl + C> to stop`)

function render(request, response) {
    response.write('Hello World')
    response.end()
}
*/