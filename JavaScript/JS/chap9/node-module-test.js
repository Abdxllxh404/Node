
const math = require('./node-module')

let s = math.sum(...[7, 11, 108, 1009])
console.log(s)

let r = new math.Random()
console.log(r.getInteger(10, 100)) 

console.log(math.number.format(1234567))


/*
const sum = require('./node-module').sum
console.log(sum(...[1,2,3]))

const Random = require('./node-module').Random
console.log(new Random().getInteger(10, 20))
*/