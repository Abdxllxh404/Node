function createServer (render, port=3000) {
	const http = require('http')
	http.createServer(render).listen(port)
	console.log('Server started on port: ' + port)
}

class Random {			
	getInteger(min, max) {			
		return min + Math.floor((Math.random() * (max - min)))
	}
}

module.exports.createServer = createServer
module.exports.Random = Random