const prompt = require('prompt-sync')()

    var square = (num) => {
        if (!Number.isInteger(num)){
            num = num**2
            return num
        } else {
            return
        } 
    }

    //?การเรียกใช้ arrow function ก็เหมือนกับการเรียกใช้ปกติทั่วๆไป