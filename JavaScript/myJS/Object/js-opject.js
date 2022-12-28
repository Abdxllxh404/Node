let language = {
  name: 'JavaScrippt', // ค่าแบบพื้นฐาน
  born: new Date(1995, 10, 01), // ค่าที่เป็น Object แบบ JavaScript
  developer: ['Brendal Eich', 'ECMA'], //ค่าแบบ Array
  price: undefined,
  browserSupport: {
    Microsoft: 'Edge',
    Google: 'Chorme',
    Mozilla: 'Firefox',
    Apple: 'SAfari',
  },
};

//แนวทางการเข้าถึง
console.log('Year Born:', language.born.getFullYear());
console.log('Original developer:', language.developer[0]);
console.log("Mozilla's browser:", language.browserSupport.Mozilla);
