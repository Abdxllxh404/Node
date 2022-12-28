
async function num() {
    console.log(1)
    console.log(await Promise.resolve(2))
    console.log(3)
}

async function letter() {
    console.log('a')
    console.log(await Promise.resolve('b'))
    console.log('c')
}

num()
letter()