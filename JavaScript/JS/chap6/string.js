
var str = 'JavaScript'
//console.log(str[0])		//J
//console.log(str[2])		//v

for (i = 0; i < str.length; i++) {
	//console.log(str[i])
}

for (i in str) {
    //console.log(str[i])
}

for (c of str) {
    //console.log(c)
}


var s = 'abcdefg'   
//console.log(s.substring(2, 5))   //cde  (อ่านจากลำดับ 2 ถึง 4)
//console.log(s.slice(2, 5))        //cde

let str2 = 'Hello'
//console.log(str2.concat(' World', 'xxx'))

let str3 = 'Hi'
let a = str3.concat(' Tom')   //a = 'Hi Tom'
//let b = a.concat(', How', ' are', ' you?') //c = 'Hi Tom, How are you?' 
console.log(a, '\n', str3)

let site = 'developerthai'
//console.log(site.anchor('http://www.developerthai.com'))


//let str = 'Go to my website'
//let link = str.link('http://www.example.com') 
//<a href='http://www.example.com'>Go to my website</a>

str = 'To-Do'
console.log(str.bold())	//<b>To-Do</b>

str = 'Warning!'
console.log(str.fontcolor('red')) //<font color="red">Warning!</font>

let word = 'Hello'
console.log(word.padStart(10, '*'))
console.log(word.padEnd(10, '...'))

