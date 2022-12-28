class Random {
    static getFloat() {
        return Math.random()
    }

    static getInt(min, max) {
        let x = (max - min) + 1
        return min + Math.floor(Math.random() * x)           
    }

    static getBoolean() {
        let r = this.getInt(1, 10) //ควรใช้ช่วงตัวเลขที่ห่างกันพอสมควร
        return (r >= 5) ? true : false
    }
}

console.log(Random.getFloat())
console.log(Random.getInt(10, 20))
console.log(Random.getBoolean())


class ThaiDate {   
    constructor(year, month, date) {
        this.year = year
        this.month = month
        this.date = day
    }

    getShotDate() {
        return `${this.date}/${this.month}/${this.year+543}`
    }

    getLongDate() {
        const m = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 
                    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 
                    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']

        return `${this.date} ${m[this.month-1]} ${this.year+543}`
    }
}

const thDate = new ThaiDate(2020, 8, 3)
console.log(thDate.getShotDate())
console.log(thDate.getLongDate())