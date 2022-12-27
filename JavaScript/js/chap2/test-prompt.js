

//npm install prompt-sync

//const ps = require('prompt-sync')
//let prompt = ps()

let prompt = require('prompt-sync')()
let name = prompt('What is your name?: ')
console.log(`Hi there ${name}`)
