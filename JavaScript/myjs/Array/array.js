const prompt = require('prompt-sync')()

//?การประกาศเรียกใช้ Array มี 2 แบบ 

    var myArray = ['Name','Lasname','Address','Birth-date']
    
    for (i = 0; i < myArray.length; i++){
        console.log(myArray[i]);
    }


/*     var myArray2 = Array('Name','Lasname','Address','Birth-date')
    var myArray2 = new Array('Name','Lasname','Address','Birth-date')
    var myArray2 = Array.of('Name','Lasname','Address','Birth-date')
    var myArray5 = (10)

    var check = 0 in myArray5
    console.log(check) //!ตอบกลับเป็น true และ false
     
 */