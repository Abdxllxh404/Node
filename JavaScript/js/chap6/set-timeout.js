
var hello = function() {
	console.log('Hello')
} 
//หลังผ่านไป 5 วินาที ให้เรียกฟังก์ชัน hello() ขึ้นมาทำงาน
setTimeout(hello, 5000)  
console.log('สวัสดีค่ะ')

//หรืออาจเขียนฟังก์ชันไว้ที่เมธอด setTimeout() โดยตรง
setTimeout(function() {
	console.log('Test')
}, 2000)

//หรืออาจเขียนในแบบ Arrow Function ก็ได้
setTimeout(() => {
	console.log('Bye')
}, 3000)
