
eval('function say(msg) { console.log(msg) }')
say('Hello World')

let x = 10, y = 20
let str = `${x} + ${y}`
console.log(str + " = " + eval(str))