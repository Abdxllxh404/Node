
class Circle {
    static PI = 3.14

    constructor (radius) {
        this.radius = radius
    }
    /*
    getArea() {
        return this.PI * (this.radius ** 2)
    }
    */
}

let c = new Circle(10)
console.log(c.PI == null)
Circle.PI = 3.141592
console.log(Circle.PI)


class Person {
	constructor(name, career, yearBorn, nationality='Thai') {
		this.name = name
		this.career = career
		this.age = new Date().getFullYear() - yearBorn
		this.nationality = nationality
	}
}

const person = new Person('Somsri', 'Accountant', 1990)
console.log(person.name)		//Somsri
person.career = 'Secretary'
console.log(person.career)     //Secretary
console.log(person.age)		//ปีปัจจุบัน - 1990
console.log(person.yearBorn) 	//null เพราะไม่มีพร็อปเพอร์ตี้ชื่อดังกล่าว

