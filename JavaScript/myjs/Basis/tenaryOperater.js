//?หาเลขคู่เลขคี่
const prompt = require('prompt-sync')();
var x = parseFloat(prompt('Enter Your Number>>'));

if (x % 2 == 0) {
  x = 'even';
  console.log(`X is ${x}`);
} else {
  x = 'odd';
  console.log(`X is ${x}`);
}
