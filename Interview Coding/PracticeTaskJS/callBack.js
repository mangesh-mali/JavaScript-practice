// function myDisplayer(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);


//callback function:-call the other function as parameter using callback.

function hello(a, b) {
    console.log('helllhi' + a + b);
}

function hel(a, b) {
    console.log(a - b);
}

function add(num1, num2, cb) {
    // console.log(num1 + num2);
    cb(num1, num2);
}

let x = 10;
let y = 20;
add(x, y, hello);
add(x, y, hel);


// b = [1, 3, 6, 9, 4];

// let a = b.map((x) => { return x + 1; })
// let x;
// let c = b.map(newMap);

// function newMap(y) {
//     return y + 5;
// }
// console.log(a);
// console.log("c " + c);