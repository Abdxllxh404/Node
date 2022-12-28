const Emp = require('./model')

Emp
//.find({salary: {$gt: 25000}})
//.sort('-birthday salary')
.find()
.sort('-salary').limit(3)
.exec((err, docs) => { 
    for (d of docs) {
        console.log(d.name, d.salary) //, d.birthday)
    }
 })
