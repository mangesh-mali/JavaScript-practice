s = "Hello"

// method 1

// let arr = s.split('')
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     ascii = arr[i].charCodeAt()
//     if (ascii > 65 && ascii < 90) {
//         rplc = arr[i].toLowerCase();
//         let ans = arr.splice(arr[i], 1, rplc);
//         arr = arr.join('')
//     }
// }
// arr = arr.join('')
// console.log(arr);

// method 2

s = "Hello";
sNew = "";
for (let i = 0; i < s.length; i++) {
    ascii = s[i].charCodeAt();
    if (ascii > 65 && ascii < 90) {
        sLow = s[i].toLowerCase();
        sNew = sNew + sLow;
    }
    else {
        sNew = sNew + s[i];
    }
}
console.log(s);
console.log(sNew);
