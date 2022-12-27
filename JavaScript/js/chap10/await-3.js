
async function test1() {
    console.log(1)
    Promise.resolve(2).then(r => console.log(r))
    console.log(3)
}

async function test2() {
    console.log(1)
    await Promise.resolve(2).then(r => console.log(r))
    console.log(3)
}

test1()
setTimeout(test2, 1000)