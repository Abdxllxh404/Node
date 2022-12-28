
const Emp = require('./model')
/*
Emp
.find()
.exec((err, docs) => {
    for (d of docs) {
        console.log(d._id, d.name)
    }
})
*/

Emp
.findById('5f5afc7a893f1e314845d1d9')
.exec((err, doc) => {
    if (!err) {
        console.log(doc._id, doc.name)
    }
})