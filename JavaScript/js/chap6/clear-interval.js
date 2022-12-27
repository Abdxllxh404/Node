
let t = 5
console.log('เหลือเวลาอีก:')
let wait = () => {
	if (t > 0) {
		console.log(t)
		t--
	} else {
        console.log('Download Now')
        clearInterval(countDown)
	}
}

let countDown = setInterval(wait, 1000)
