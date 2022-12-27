const prompt = require('prompt-sync')()

//! Anonymouse function
    var getIntiger = function(){
        let value = prompt('Enter number: ')
        let x = parseInt(value)
        
        if(Number.isInteger(x)){
            console.log(x +' '+'Number is Intiger alrady ><');
            return x
        } else {
            getIntiger()
        }
    }

    let x = getIntiger()