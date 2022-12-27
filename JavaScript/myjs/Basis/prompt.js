const prompt = require('prompt-sync')()
var rating = prompt('Rating 1-5 >>>')
//?ข้อมูลที่รับมาจาก prompt จะเป็น String เสมอ ดังนั้นเมื่อรับมาแล้วให้เราแปลงเป็นตัวเลขด้วย parseInt,parseFloat จึงจะสามารถนำไปคำนวณได้ **อย่าลืม

    if (rating==5) {
        console.log('Excellent')

    } else if (rating==4) {
        
        console.log('Very Good')    
        
    } else if (rating==3){
        console.log('Good')    

    } else if (rating==2){
        console.log('Fair')    

    } else if (rating==1){
        console.log('Poor')    

    } else {
        console.log('Unknow')    
        
    }
console.log('**********************************')

let num = parseInt(prompt('Number Input>>>'))

    if (num%2==0) {
        num = 'even'
        console.log(`Number is : ${num}`)

    } else {
        num = 'odd'
        console.log(`Number is : ${num}`)

    }


     