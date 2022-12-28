
async function success() {
    let str = 'Success'
    return str           //return Promise.resolve(str)
}

async function fail() {
    let str = 'Fail'
    throw str          //return Promise.reject(str)
}

let test = async () => {
    let r = Math.random()
    if (r <= 0.5) {
        return 'Yes'
    } else {
        throw 'No'
    }
}


console.log(1)
console.log(2)

let scs = success()
scs.then(result => console.log(result))

fail().catch(reason => console.log(reason))

test()
    .then(result => console.log(result))
    .catch(reason => console.log(reason))
 
console.log('a')
console.log('b')



