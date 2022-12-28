
let rectangle = {
    width : 10,
    height : 20,
}

rectangle['width'] = 30   				
rectangle.height = 50

//เพิ่มพร็อปเพอร์ตี้ใหม่
rectangle['filledColor'] = 'yellow'		
rectangle['borderColor'] = 'green'		
rectangle.borderWidth = 2	

Object.assign(rectangle, {
    x:1,
    y:2,
})

console.log(rectangle)

for (p in rectangle) {
    console.log(rectangle[p])
}

for (p of Object.keys(rectangle)) {
    console.log(rectangle[p])
}

with (rectangle) {
    console.log(filledColor)
    console.log(borderWidth)
    height = 15
    borderColor = 'green'
}
