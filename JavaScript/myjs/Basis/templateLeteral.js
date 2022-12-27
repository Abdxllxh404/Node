//!หารผลเลขยกกำลัง ของ 2 ตัว
const prompt = require('prompt-sync')();

let b = parseInt(prompt('Enter your number 1 >>'));
let m = parseInt(prompt('Enter your number 2 >>'));
//?ทำข้อมูลที่รับมาเป็นตัวเลขก่อนนำไปคำนวณ parseInt()

console.log(`${b} ยกกำลัง ${m} >>>${b ** m} `);
console.log('*************************************');

let current_year = new Date().getFullYear();
let create_year = 1995;

console.log(`JavaScript ถูกสร้างขึ้นในปี ${create_year}
         ปัจจุบันตรงกับปี ${current_year}
         ดังนั้น JavaScript ถูกสร้างมาเป็นเวลา ${
           current_year - create_year
         } ปี`);
