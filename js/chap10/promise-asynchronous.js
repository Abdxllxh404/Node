
console.log(1)
console.log(2)

let p = Promise.resolve(Math.random())
p.then(result => console.log(result))

console.log('a')
console.log('b')