const prompt = require('prompt-sync')() 

var n1 = parseFloat(prompt('จำนวนที่ 1 >> '))	
var max = n1				//ให้ค่าสูงสุดเท่ากับจำนวนแรกไว้ก่อน

var n2 = parseFloat(prompt('จำนวนที่ 2 >> '))	
if (n2 > max) {
	max = n2				//ถ้า n2 มากกว่า max เดิม ให้ค่า max มีค่าเท่ากับ n2
}

var n3 = parseFloat(prompt('จำนวนที่ 3 >> '))	
if (n3 > max) {
	max = n3				//ถ้า n3 มากกว่า max เดิม ให้ค่า max มีค่าเท่ากับ n3
}
console.log('จำนวนที่มากที่สุดคือ: ' + max)
