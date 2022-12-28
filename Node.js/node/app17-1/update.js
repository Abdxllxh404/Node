
const Emp = require('./model')

/*
Emp
//.findByIdAndUpdate('5f5afc7a893f1e314845d1d7', {name: 'Tom And Jerry'}, {useFindAndModify:false})
//.findOneAndUpdate({name: {$eq: 'Tom Jerry'}}, {name: 'Tom Jerry'}, {useFindAndModify:false})
//.updateOne({name: {$eq: 'Flint Stone'}}, {married: false})
.exec((err) => {
    if (!err) {
        read()
    }
})
*/

/*
Emp
.updateMany(
    {birthday: {$lte: new Date(1985, 12, 31)}}, 
    {$inc: {salary: 10000}})
.exec((err, result) => {
    if (!err) {
        console.log('จำนวนรายการที่แก้ไข: ' + result.nModified)
        //read()
    }
})
*/

function read() {
    Emp
    .find()
    .exec((err, docs) => {
        for (d of docs) {
            console.log(d.name, d.salary, d.birthday, d.phones)
        }
    })
}
