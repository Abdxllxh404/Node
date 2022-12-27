/*
const prompt = require('prompt-sync')() 
var x = 0
do {
 	x = parseInt(prompt('กรุณาใส่เลขที่มากกว่า 99 >> '))
} while (x <= 99)

console.log('ขอบคุณค่ะ')
*/

const prompt = require('prompt-sync')() 
var number = parseInt(Math.random() * 100)
var win = false			//สถานะที่บ่งชี้ว่าชนะหรือยัง
var count = 1			//การทายครั้งที่
const maxGuess = 7		//ทายได้ไม่เกิน 7 ครั้ง
var guessNum			//จำนวนครั้งที่ทาย
var message = ''		//ข้อความที่จะแสดง
var input = ''			//ข้อมูลที่รับจากผู้ใช้		

do {
	input = prompt(`การทายครั้งที่: ${count} กรุณาใส่ตัวเลข >> `)
	guessNum = parseInt(input)
			
	if (guessNum > number) {
		message= 'น้อยกว่านี้'
	} else if (guessNum < number) {
		message = 'มากกว่านี้'
	} else if (guessNum == number) {
		message = 'ถูกต้อง'
		win = true
	} else {
		message = 'กรุณาใส่ค่าเป็นตัวเลข 0-100'
	}
	console.log(message + '\n')

	if (count == maxGuess) {
		console.log('ทายเกินจำนวนครั้งที่กำหนด')
		break
	}
			
	count++			
} while (!win)
