
function inc(num, func) {
    num += 1
    func(num)
}

function showValue(v) {
    console.log(v)
}

//inc(10, showValue)
/*
inc(99, function(v) {
    console.log(v)
})
*/

inc(99, (v) => {
    console.log(v)
})

inc(1009, v => console.log(v))