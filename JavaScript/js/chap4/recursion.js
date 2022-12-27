
const prompt = require('prompt-sync')()

function selectMenu() {
	console.log('\nกรุณาเลือกเมนู')
	let menu = prompt('1: Continue,  2: Exit, 3: Help >> ')
	menu = parseInt(menu)
 	if (Number.isInteger(menu)) {
		if (menu >= 1 && menu <= 3) {
			return menu
		} else {
			selectMenu()		//ถ้าไม่ตรงตามเงื่อนไข ให้เรียกตัวมันเองแบบ Recursion
		}
	} else {
		selectMenu()			//ถ้าไม่ตรงตามเงื่อนไข ให้เรียกตัวมันเองแบบ Recursion
	}
}
//------------------------------------------------------------

let m = selectMenu()


