//!Nomal function js
function sumRange(begin, end) {
  var sum = 0;
  for (i = begin; i <= end; i++) {
    sum += i;
  }
  console.log(`Sum result is : ${begin}-${end} = ${sum}`);
}
//?call function
sumRange(100, 200);
