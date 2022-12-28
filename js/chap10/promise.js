
new Promise((resolve, reject) => {
    let r = Math.random()
    if (r <= 0.5) {
        resolve(r + ' => resolve')
    } else {
        reject(r + ' => reject')
    }
}).then(result => {
    console.log(result)
}).catch(reason => {
    console.log(reason)
}).finally(() => {
    console.log('Promise done!')
})


/*
new Promise((resolve) => {
    resolve(Math.random())
}).then((result) => console.log(result))
*/