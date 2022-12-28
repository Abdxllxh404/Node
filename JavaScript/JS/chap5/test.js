
var browsers = new Array('Chrome', 'Edge', 'Firefox', 'Safari')
browsers.forEach(function(b, i) {
    console.log(i + 1, b)
})

browsers.forEach(b => {
    console.log(b)
})


let products = Array('iPhone', 'iPad', 'MacBook')
let numbers = Array.of(10, 15, 25, 75, 100)

console.log(products.join(' - '))

function summation(data) {
    var sum = 0
    for (n of data) {
        sum += n
    }
    return sum
}

var sum = summation([1, 3, 5, 7])
//console.log(sum)