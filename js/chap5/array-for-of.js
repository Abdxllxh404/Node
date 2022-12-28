
var thaiDigits = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙']
var words = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 
 			'หก', 'เจ็ด', 'แปด', 'เก้า']	

const prompt = require('prompt-sync')()
var thaiNum = ''
var thaiWord = ''		
var strNum = prompt('กำหนดตัวเลขอารบิกเป็นจำนวนเต็มบวก >> ')
for (digit of strNum) {
	thaiNum += thaiDigits[digit]
 	thaiWord += words[digit]
}		

console.log('เลขไทย: ' + thaiNum)
console.log('คำอ่าน: ' + thaiWord)
