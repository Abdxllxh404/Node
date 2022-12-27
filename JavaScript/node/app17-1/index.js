
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/db17', {
    useNewUrlParser: true, useUnifiedTopology: true
})

let employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    birthday: Date,
    married: Boolean,
    phones: [String],
})

let Emp = mongoose.model('Emp', employeeSchema)

//const Emp = require('./Emp')

//Emp.collection.drop()
/*
let doc = {
    name: 'James Bond', 
    salary: 30000, 
    birthday: new Date(1990, 9, 30), 
    married: true,
    phones: ['081234xxxx', '02111xxxx']
}

let e = new Emp(doc)
let insert_id = null
e.save((err, doc) => {
    if (!err) { 
        insert_id = doc._id
        console.log(insert_id)
        //read()
    }
})
*/
//console.log('var id' + result._id)


function read() {
    Emp.find({}, (err, docs) => {   //{name:/on/i}
        if (!err) {
            docs.forEach((d) => {
                console.log(d._id, d.name, d.phones[0])
            })
        }
    })
}


/*
let doc2 = {
    name:'Flint Stone', salary:25000, 
    birthday:new Date(1995, 12, 31), 
    married:false, phones: ['091111xyxy']
}

let result = Emp.create(doc2, (err) => {
    if (!err) { 
        console.log('Document saved')
        read()
    }
})
*/


/*
Emp.insertMany([
    {name: 'Tom Jerry', salary:23000, birthday: new Date(1997, 10, 10), married:true},
    {name: 'Harry Potter', salary:20000, birthday: new Date(1998, 2, 14), married:false},
], (err, docs) => {
    if (err) { 
        console.log('Error')
    } else { 
        console.log('Documents inserted')
        read()
    } 
})
*/
/*
Emp.insertMany([
    {name: 'Sherlock Holmes', salary:26000, birthday: new Date(1994, 4, 13), married:true},
    {name: 'Teddy Bear', salary:20000, birthday: new Date(1999, 8, 12), married:false},
    {name: 'Aston Martin', salary:350000, birthday: new Date(1980, 12, 5), married:true},
    {name: 'Mercedes Benz', salary:33000, birthday: new Date(1985, 10, 31), married:true},
    {name: 'Rolls Royce', salary:380000, birthday: new Date(1975, 9, 15), married:false},
    {name: 'Lockheed Martin', salary:40000, birthday: new Date(1978, 10, 31), married:true},
], (err, docs) => {
    if (!err) {
        console.log('Documents inserted')
        read()
    }
})
*/

read()

/*
Emp.find({}, (err, docs) => {   //{name:/on/i}
    if (!err) {
        //docs.forEach((row) => {
            console.log(docs)
        //})
    }
})  
*/
//console.log('Hello World')


//Emp
//.find()
//.select('name salary married')
//.where('salary').gte(20000).lte(25000)
//.where('birthday').lte(new Date(1995, 1))
//.where('salary').gte(20000)
//.where('married').equals(true)
//.nor([{salary:{$gte:25000}, married:true}])
//.orFail((err) => console.log(err))
//.where({salary: {$gte: 22000, $lte: 25000}})
//.countDocuments()
/*
Emp.aggregate([{
    $group: {
        //_id: null, 
        _id: '$married',
        //agg: { $sum: 1 }           //$sum: 1 => count
        agg: { $max: '$salary' }     //$sum, $max, $min, $avg
    }
}]).exec((err, docs) => {
    if (!err) {       
        //console.log('name\t\t salary') //\t\t married')
        //docs.forEach((row) => {
        //    console.log('%s\t%s\t%s', row.id, row.name, format(row.salary)) //, '\t', row.married)
        //})
        docs.forEach((row) => {
            console.log(row._id, row.agg)
        })
    }
})
*/

function format(num) {
    return new Intl.NumberFormat().format(num)
}

