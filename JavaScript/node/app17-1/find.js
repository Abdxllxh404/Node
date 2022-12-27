
const Emp = require('./model')

read()

function read() {
    Emp.find({}, (err, docs) => {
        if (!err) {
            console.log(`found ${docs.length} document(s)`)
            console.log('----------')
            for (i in docs) {       //i จะเป็นลำดับใน docs
                console.log(docs[i]['name'])
            }
        }
    })
}

function read2() {
    Emp
    .find()     //อ่านข้อมูลทั้งหมด
    .exec((err, docs) => {
        if (!err) {
            console.log(`found ${docs.length} document(s)`)
            console.log('----------')
            docs.forEach((d) => {       //d จะเป็นแต่ละรายการใน docs
                console.log(d.name, d.salary, d.married)
            })
        }
    })
}

function read3() {
    Emp
    .find()     
    .select('name salary married phones')
    .exec((err, docs) => {   
        if (!err) {
            console.log(`found ${docs.length} document(s)`)
            console.log('----------')
            docs.forEach((d) => {       //d จะเป็นแต่ละรายการใน docs
                console.log(d.name, (d.phones[0]==undefined)?'':d.phones[0])
            })
        }
    })    
}

function read4() {
    Emp
    .find()
    .distinct('married')
    .exec((err, docs) => {   
        if (!err) {
            docs.forEach((d) => {       
                console.log(d)
            })
        }
    })    
}

