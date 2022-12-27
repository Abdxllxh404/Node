/*
let circle = {
    radius: 10,

    getArea: function(pi=3.14) {
        return pi * (circle.radius ** 2)
    },

    getPerimeter(pi=3.14) {
        return 2 * pi * circle.radius
    },
}

console.log(circle.getArea(3.14159))
console.log(circle.getPerimeter())


circle.getName = function() {
    return 'circle'
}

circle.sphereVolume = (pi=3.14) => {
    return (4/3) * pi * (circle.radius ** 3)
}

console.log(circle.getName())
console.log(circle.sphereVolume())
*/

let thaiDate = {
    currentDate: Date(),
    thaiMonths: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม',
                 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม',
                 'พฤศจิกายน', 'ธันวาคม'],
    
    year() { return this.currentDate.getFullYear() },
    month() { return this.currentDate.getMonth() + 1 },
    day() { return this.currentDate.getDate() },

    getShortDate() {
        return `${this.day()}/${this.month()}/${this.year() + 543}`
    },

    getFullDate() {
        return `${this.day()} ${this.thaiMonths[this.month()-1]} ${this.year() + 543}`
    },
}

console.log('Short Date: ', thaiDate.getShortDate())
console.log('Long Date: ', thaiDate.getFullDate())