
function isLeapYear(year) {
    if ((year > 0) && (year < 10000) && Number.isInteger(year)) {
        if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
            return true
        } else {
            return false
        }
    } else {
        return
    }
}

console.log(0 + ' is leap year: ' + isLeapYear(0))
console.log(2020 + ' is leap year: ' + isLeapYear(2020))
console.log(9999 + ' is leap year: ' + isLeapYear(9999))
console.log(10000 + ' is leap year: ' + isLeapYear(10000))

