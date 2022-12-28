
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/db17', {
    useNewUrlParser: true, useUnifiedTopology: true
}).catch(err => console.log(err))

let employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    birthday: Date,
    married: Boolean,
    phones: Array
})

module.exports = mongoose.model('Emp', employeeSchema)
