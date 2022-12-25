console.log("10" + null); //10null
console.log(10 + null); //10
console.log(10 - null); //10
console.log(10 * null); //0
console.log(10 / null); //Infinity

console.log("10" + undefined); //10undefined
console.log(10 + undefined); //NaN
console.log(10 - undefined); //NaN
console.log(10 * undefined); //NaN
console.log(10 / undefined); //NaN

console.log(true + false); //1 + 0 = 1
console.log(true - false); //1 - 0 = 1
console.log(true * false); //1 * 0 = 0
console.log(true / false); //Infinity

console.log(undefined == null) //true
console.log(undefined === null) //false

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true

console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false

console.log(typeof (NaN)); //number
console.log(typeof (null)); //object
console.log(typeof (undefined)); //undefined