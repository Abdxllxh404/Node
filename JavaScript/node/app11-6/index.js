
const myModule = require('./mymodule')
myModule.createServer(render)

function render(request, response) {
	let r = new myModule.Random()
	response.write('Random number: ' + r.getInteger(1, 100))
	response.end()
}
