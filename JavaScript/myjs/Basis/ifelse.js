const prompt = require('prompt-sync')();
let size = parseFloat(prompt('Files size Input (Byte)>>'));
var unit;

if (size >= 1099511627776) {
  size /= 1099511627776;
  unit = 'TB';
} else if (size >= 1073741824) {
  size /= 1073741824;
  unit = 'GB';
} else if (size >= 1048576) {
  size /= 1048576;
  unit /= 'MB';
} else if (size >= 1024) {
  size /= 1024;
  unit = 'KB';
} else {
  unit = 'Byte';
}

console.log(`Files size Is: ${size.toFixed(2)} ${unit}`);
