
var d = new Date()
console.log(`เวลาขณะนี้คือ ${d.getHours()}:${d.getMinutes()}`)

var months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
              'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']

var m = d.getMonth()
var now = `วันที่ ${d.getDate()} ${months[m]} ${d.getFullYear() + 543}`  	
//+543 เพื่อเปลี่ยนจาก ปี ค.ศ. => ปี พ.ศ.
console.log(now)
