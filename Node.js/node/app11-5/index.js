const http = require('http')
const url = require('url')

http.createServer(render).listen(3000)
console.log('Server started on port: 3000')

function render(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'})
	let reqUrl = url.parse(request.url, true)	 
	with (reqUrl) {	//ใช้ with เพราะไม่ต้องการระบุชื่อ reqUrl แบบซ้ำๆ
		response.write(
			`path: ${path} <br>
			 pathname: ${pathname} <br>
			 search: ${search} <br>`
		)

		for (k in query) {    //query => {k1:v1, k2:v2, ...}
			response.write(`${k}: ${query[k]} <br>`)
		}
	}
	response.end()
}
