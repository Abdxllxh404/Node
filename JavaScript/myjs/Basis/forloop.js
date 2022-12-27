//?หาตัวเลขสูงสุดที่รับค่าเข้ามา
const prompt = require('prompt-sync')()

var max = ''

var n1 = parseFloat(prompt('Enter Number 1 >>'))
    if(n1){
        max = n1
    }

var n2 = parseFloat(prompt('Enter Number 2 >>'))
    if (n2>max) { 
        max = n2 
    }
    
var n3 = parseFloat(prompt('Enter Number 3 >>'))
    if (n3>max) { 
        max = n3 
    }

    console.log(`Max intigers is : ${max}`)
