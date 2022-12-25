data = [
    { a: 'happy', b: 'robin', c: ['blue', 'green'] },
    { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
    { a: 'sad', b: 'goldfish', c: ['green', 'red'] }
];

finalArr = [];

/* // 1st Way

// op = ['blue','green','green','black','orange','blue','green','red']

for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    // console.log(Object.values(data[i]));
    arr = Object.values(data[i]);
    for (let j = 0; j < arr.length; j++) {
        if (typeof (arr[j]) == 'object') {
            // console.log(arr[j]);
            // console.log("true");
            finalArr = finalArr.concat(arr[j]);
        }
    }

}

console.log(finalArr);
*/

// 2nd Way
var arr = data.map((x) => {
    for (let i in x) {
        console.log(x[i]);
        if (typeof (x[i]) == "object") {
            finalArr = finalArr.concat(x[i]);  //Concat Method
        }
    }
})

console.log("");
console.log("Final Answer:")
console.log(finalArr);


