let a = 123.4567
let b = Number(555)

console.log(
    a.toFixed(2),
    b.toFixed(2),
)


function randInt(min, max) {
    let x = (max - min) + 1
    return min + Math.floor(Math.random() * x)
}

console.log(randInt(-100, 200))