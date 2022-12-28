
const Emp = require('./model')

/*
Emp.aggregate([{
    $group: {
        _id: '$married',        
        agg: { $sum: '$salary' }    
    }
}]).exec((err, docs) => {
    if (!err) { 
        for (d of docs) {
            console.log(d._id, d.agg)
        }
    }
})
*/

Emp.aggregate([{
    $group: {
        _id: '$married',
        agg: { $min: '$birthday' }
    }
}]).exec((err, docs) => {
    if (!err) { 
        let y = new Date().getFullYear()
        for (d of docs) {
            //console.log(d._id, d.agg)
            console.log(d._id, y - new Date(Date.parse(d.agg)).getFullYear())
        }
    }
})

/*
Emp.aggregate([{
    $group: {
        _id: '$married',
        agg: { $sum: 1 }
    }
}]).exec((err, docs) => {
    if (!err) { 
        for (d of docs) {
            console.log(d._id, d.agg)
        }
    }
})
*/