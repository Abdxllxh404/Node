
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/db19', {
    useNewUrlParser: true, useUnifiedTopology: true
}).catch(err => console.log(err))

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    images: String
})

module.exports = mongoose.model('Product', productSchema)
