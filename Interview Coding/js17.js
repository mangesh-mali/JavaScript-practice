// let x = 'this is the test string';

// let result = x.substring(4, 12);

// console.log(result);

const a = Array.from(new Set([4, 5, 6, 4, 5, 1, 2, 3, 5])).map((x) => "_" + x);

console.log(a);

// const x = { "_TE": 45, "_TEMP": "77", "_TO": 44, "_DE": 77, "TP": 44 }

// for (let a in x)

//     a.startsWith('_T') && delete x[a]

// console.log(x)

const obj1 = {
    a: 10,
    b: 15,
    c: 18
};

const obj2 = Object.assign({ c: 7, d: 1 }, obj1);

console.log(obj2.c, obj2.d);

const x = { a: 12, b: 78, c: 11.22, d: 78.22 }

const y = Object.values(x).map(x => x.toFixed()).sort((a, b) => b - a);

console.log(y)