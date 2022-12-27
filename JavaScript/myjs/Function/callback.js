const prompt = require('prompt-sync')();

function leabYear(year) {
  result = '';
  if (year > 0 && year < 10000 && Number.isInteger(year)) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      return (result = 'Leab Years');
    } else {
      return (result = 'Is not leab years');
    }
  } else {
    return (result = 'Please enter years in nowaday ><');
  }
}

result = leabYear(parseInt(prompt('Input Year (Is leab Years):')));
console.log('Year Is :' + ' ' + result);

//?ตัวแปรที่อยู่ใน function ไม่สามารถนำมาใช้นอกฟังชั่นได้ นอกจากการส่งค่ากลับออกมาเท่านั้น
//? return result จะต้องมีตัวรับข้อมูลเสมอ ต้องเรียกฟังชั่นพร้อมกับประกาศตัวแปร
//! return สามารถนำมาใช้จากการออกจากฟังชั่นได้ด้วย
