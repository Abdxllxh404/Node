
async function test() {
    let p1 = new Promise(resolve => {
        let x = 1000
        resolve(x)
    })
    console.log(await p1)     

    let p2 = Promise.resolve(2000)
    console.log(await p2)      

    let p3 = await new Promise(resolve => resolve(3000))
    console.log(p3)            

    let p4 = await Promise.resolve(4000)
    console.log(p4)            
}

test()



