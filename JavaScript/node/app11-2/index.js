
const http = require('http')
const port = 3000

http.createServer(render).listen(port)
console.log(`Server started on port: ${port}`)

function render(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'})
	let html = `
		<!doctype html>
		<html>
		<head>
			<title>Node.js</title>
		</head>
		<body>
			<h2>Welcom to Node.js</h2>
			<b>Node.js runs JavaScript at Server Side</b>
		</body>
		</html>`

	response.write(html)
	response.end()
}


function statusCodes(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'})
	for (k in http.STATUS_CODES) {
		response.write(`${k}: ${http.STATUS_CODES[k]} <br>`)
	}
	response.end()
}
