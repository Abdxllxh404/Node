
let dt = new Date()

let df = new Intl.DateTimeFormat('th-TH-u-ca-buddhist', {
    dateStyle: 'full',
    numericSystem: 'thai',

}).format(dt)

console.log(df)