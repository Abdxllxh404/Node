const Emp = require('./model')

Emp
//.find({salary: {$gte: 23000, $lte: 30000}})
//.find({name: {$in: ['Tom Jerry', 'Teddy Bear']}})  
//.where('name').in(['Tom Jerry', 'Flint Stone'])
//.where({salary: {$gte: 23000, $lte: 30000}})
//.find()
//.where('salary').gte(25000)
//.and({married: { $eq: true }})
//.find({salary: { $gte: 30000 }})
//.or({birthday: { $lte: new Date(1980, 12, 31) }})
//.find()
//.find()
//.nor([{salary: {$gte: 25000}, married: true}])
.find()
//.where('name').equals(/^T/)
//.where('name').equals(/ON/i)
//.where('name').equals(/e$/)
.exec((err, docs) => { 
    for (d of docs) {
        console.log(d.name, d.salary, d.married)
    }
 })
