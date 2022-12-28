
/*
const prompt = require('prompt-sync')() 
while (true) {
	x = parseInt(prompt('Enter number > 0 : '))
	if (x <= 0) {
		continue
	} else {
		break
	}
}
*/

const prompt = require('prompt-sync')() 
var validCode = false
var code = ''		
while (!validCode) {  		//ถ้าตัวแปร validCode ยังเป็น false ก็ให้วนลูปต่อไป
	code = prompt('กรุณาใส่รหัสผ่าน >> ')
	if (code == '1234') {
		validCode = true  	//ถ้าใส่รหัสถูกต้อง เปลี่ยนค่า validCode เป็น true 
	}						//เพื่อออกจากลูป while
}
console.log('คุณใส่รหัสถูกต้อง')

