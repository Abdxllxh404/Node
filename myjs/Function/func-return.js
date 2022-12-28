function oddEven(num) {
  var result = num % 2 == 0 ? 'Odd' : 'Even';
  return result;
}

const prompt = require('prompt-sync')();
callfunc = oddEven(parseInt(prompt('Input number (Ood,Even) :')));
console.log(`Number Is :` + callfunc);
