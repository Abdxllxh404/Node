
const Emp = require('./model')

save()

function save() {
    let doc1 = {
        name: 'James Bond', 
        salary: 30000, 
        birthday: new Date(1990, 9, 30), 
        married: true,
        phones: ['081234xxxx', '02333xxxx']
    }
    new Emp(doc1).save(err => {
        if (!err) { 
            console.log('doc1 saved')
            create()
        }
    })
}

function create() {
    let doc2 = {
        name: 'Flint Stone', 
        salary: 25000, 
        birthday: new Date(1995, 12, 31), 
        married: false,
        phones: ['088765xxxx']
    }
    Emp.create(doc2, err => {
        if (!err) { 
            console.log('doc2 saved')
            insertMany()
        }
    })
}

function insertMany() {
    let docs = [
        {name: 'Tom Jerry', salary:23000, birthday: new Date(1997, 10, 10), married:true, phones:[]},
        {name: 'Harry Potter', salary:20000, birthday: new Date(1998, 2, 14), married:false, phones:[]},
        {name: 'Sherlock Holmes', salary:26000, birthday: new Date(1994, 4, 13), married:true, phones:[]},
        {name: 'Teddy Bear', salary:20000, birthday: new Date(1999, 8, 12), married:false, phones:[]},
        {name: 'Aston Martin', salary:350000, birthday: new Date(1980, 12, 5), married:true, phones:[]},
        {name: 'Mercedes Benz', salary:33000, birthday: new Date(1985, 10, 31), married:true, phones:[]},
        {name: 'Rolls Royce', salary:380000, birthday: new Date(1975, 9, 15), married:false, phones:[]},
        {name: 'Lockheed Martin', salary:40000, birthday: new Date(1978, 10, 31), married:true, phones:[]},
    ]
    
    Emp.insertMany(docs, err => {
        if (!err) { console.log('docs inserted') } 
    })
}
