/*
var begin = 1, end = 10
var sum = 0
for (i = begin; i <= end; i++) {
 	sum += i
}
console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)

begin = 10 
end = 20
sum = 0
for (i = begin; i <= end; i++) {
 	sum += i
}
console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)

begin = 30 
end = 50
sum = 0
for (i = begin; i <= end; i++) {
 	sum += i
}
console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)
*/

function sumRange(begin, end) {
	var sum = 0
 	for (i = begin; i <= end; i++) {
		sum += i
 	}
	console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)
}

sumRange(1, 10)
sumRange(10, 20)
sumRange(20, 50)
