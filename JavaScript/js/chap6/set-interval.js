
let t = 5
console.log('เหลือเวลาอีก:')
let wait = () => {
	if (t > 0) {
		console.log(t)
		t--
	} else {
        console.log('Download Now')
        process.exit(1)    //สำหรับ Node.js
		//return           //สำหรับเว็บเพจ
	}
}

setInterval(wait, 1000)
