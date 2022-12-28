
let prompt = require('prompt-sync')()
let a = prompt('จำนวนที่ 1 >> ')
let b = prompt('จำนวนที่ 2 >> ')
a = parseFloat(a)
b = parseFloat(b)
console.log(`ผลบวกคือ: ${a + b}`)