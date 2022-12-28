
function sum(...data) {
    let sum = 0
    for (d of data) {
        sum += d
    }
    return sum
}

class Random {
    getInteger(min, max) {
        return min + Math.floor((Math.random() * (max - min)))
    }
}

let number = {
    format(value) {
        return new Intl.NumberFormat().format(value)
    }
}

module.exports.sum = sum
module.exports.Random = Random
module.exports.number = number