const prompt = require("prompt-sync")({ sigint: true });
var firstArraySize = prompt("Enter First Array Size? ");
// console.log(firstArraySize);

firstArray = [];
secondArray = [];
thirdArray = [];

for (let i = 0; i < firstArraySize; i++) {
    ele = prompt();
    numEle = Number(ele);
    firstArray.push(numEle);
}
// console.log(firstArray);

var secondArraySize = prompt("Enter Second Array Size? ");
for (let i = 0; i < secondArraySize; i++) {
    ele = prompt();
    numEle = Number(ele);
    secondArray.push(numEle);
}
// console.log(secondArray);

let smallSize = firstArraySize;
let largestArray = secondArray.slice();
if (firstArraySize > secondArraySize) {
    smallSize = secondArraySize;
    largestArray = firstArray.slice();
}
// console.log('smallSize ' + smallSize)

for (let i = 0; i < smallSize; i++) {

    // if (isNaN(arr1[i])) {
    //     arr1[i] = 0;
    // }
    // if (isNaN(arr2[i])) {
    //     arr2[i] = 0;
    // }
    // sum = arr1[i] + arr2[i];

    sum = firstArray[i] + secondArray[i];
    thirdArray.push(sum);
}
console.log(thirdArray);
console.log(largestArray);

extraArray = largestArray.slice(smallSize)
console.log(extraArray);

thirdArray = thirdArray.concat(extraArray);
console.log(thirdArray);
