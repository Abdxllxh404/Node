
class SimpleDate {   
    constructor(year, month, date) {
        this.year = year
        this.month = month
        this.date = date
    }

    getShortDate() {
        return `${this.date}/${this.month}/${this.year+543}`
    }
}

class ThaiDate extends SimpleDate {
    /*
    constructor(year, month, date, hour=0, minute=0) {
        super(year, month, date)

        this.year = year
        this.month = month
        this.date = date
        this.hour = hour
        this.minute = minute
    }
    */
    
    isLeapYear() {
        let y = this.year
        if ((y % 400 == 0) || ((y % 4 == 0) && (y % 100 != 0))) {
            return true
        } 
        return false
    }
    
    getLongDate() {
        const m = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 
                    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
                    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']

        return `${this.date} ${m[this.month-1]} ${this.year+543}`
    }

    //override
    getShortDate() {
        return `${this.date}-${this.month}-${this.year+543}`
    }
}

const thDate = new ThaiDate(2020, 8, 4)
console.log(thDate.getLongDate())
console.log(thDate.isLeapYear())
console.log(thDate.getShortDate())

const simpleDate = new SimpleDate(2020, 8, 4)
console.log(simpleDate.getShortDate())
//console.log(simpleDate.getLongDate())  //Error
//console.log(simpleDate.isLeapYear())   //Error

/*
class ThaiDate2 extends SimpleDate {
    constructor(year, month, date, hour=0, minute=0) {
        super(year, month, date)

        this.year = year
        this.month = month
        this.date = date
        this.hour = hour
        this.minute = minute
    }

    getFullDate() {
        const m = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 
                    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
                    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']

        const w = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']

        let wd = new Date(this.year, this.month-1, this.date).getDay()
        
    }
}

const thDate2 = new ThaiDate2(2020, 8, 4)
thDate2.getFullDate()
*/