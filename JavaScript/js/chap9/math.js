
const PI = 3.141

function add(num1, num2) {
    return num1 + num2
}

export {PI, add}

export function subtract(num1, num2) {
    return num1 - num2
}

export function multiply(num1, num2) {
    return num1 * num2
}

//Arrow Function
export let divide = (num1, num2) => {
    return num1 / num2
}

export class Random {
    static getFloat() {
        return Math.random()
    }

    static getInteger(min, max) {
        return min + Math.floor(Math.random() * (max - min))   
    }

    static getBoolean() {
        return (this.getInteger(1, 10) <= 5) ? true : false
    }  
}

//object
export const number = {
    value: 0,

    format() {
        return new Intl.NumberFormat().format(this.value)
    },

    isEven() {
        return (this.value % 2 == 0) ? true : false
    },
}
