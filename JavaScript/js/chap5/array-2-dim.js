/*
var colors = [['red','green','blue'], ['black','white']]

for (i = 0 i < colors.length i++) {
	for (j = 0 j < colors[i].length j++) {
		console.log(colors[i][j])	
	}
}		//red green blue black white

for (i in colors) {
    for (j in colors[i]) {
        console.log(colors[i][j])
    }
}

for (cols of colors) {
    for (c of cols) {
        console.log(c)
    }
}

*/

var parts = ['ภาคกลาง', 'ภาคเหนือ', 'ภาคอีสาน', 'ภาคใต้']
var provinces = [['กรุงเทพ', 'สมุทรปราการ', 'ปทุมธานี', '...'],
				['เชียงใหม่', 'เชียงราย', 'ลำพูน', 'ลำปาง', '...'],
				['นครราชสีมา', 'บุรีรัมย์', 'สุรินทร์', '...'],
				['กระบี่', 'ตรัง', 'สงขลา', 'ภูเก็ต', '...']]
var str = ''
		
for (i in parts) {
	str += parts[i] + ': '
    str += provinces[i].join(', ')
    str += '\n'
}

console.log(str)
