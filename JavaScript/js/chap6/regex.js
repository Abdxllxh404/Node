
let str = 'ECMAScript or JAVASCRIPT'
let pattern = /script/ig
console.log(str.match(pattern))
/*
pattern = /ba/ig
str = '0123 banana obama'
if (str.search(pattern) != -1) {
    console.log('String is valid') 
}

console.log(str.search(pattern))


pattern = /-|\//               //ใช้ - หรือ / ในการคัดแยก
let date = '2020/06/07'        //หรืออาจเขียนเป็น  2020-06-07 
let dt = date.split(pattern)  //$dt = ['2020','06', '07']

console.log(dt)


str = 'no pain no gain'
pattern = /no/img
str = str.replace(pattern, 'more')
console.log(str)


let str4 = 'Creating Web Application with JavaScript'
let pattern4 = /(Java)|(ECMA)Script/ig
if (pattern4.test(str4)) {
	console.log('OK')
} else {
	console.log('Error')
}
*/

let patt = /Yes|OK/i
console.log(patt.test('OK'))

patt = /abc{3}/
console.log(patt.test('abccc'))

console.log(/http(s?):\/\//.test('https://'))

console.log(/(.(jpg)|(png))$/i.test('a.jpg'))

