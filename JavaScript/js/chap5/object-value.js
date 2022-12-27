
let language = {
    name: 'JavaScript',
    born: Date(1995, 10, 01),
    developer: ['Brendal Eich', 'ECMA'],
    price: undefined,
    browserSupport: {
        Microsoft: 'Edge',
        Google: 'Chrome',
        Mozilla: 'Firefox',
        Apple: 'Safari',
    },
}

console.log('Year born: ', language.born.getFullYear())
console.log('Original developer: ', language.developer[0])
console.log('Mozilla\'s browser: ', language.browserSupport.Mozilla)
