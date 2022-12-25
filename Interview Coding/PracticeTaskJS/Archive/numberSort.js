var arr = [NaN, 104, NaN, NaN, 97, NaN, NaN, 104, NaN, NaN, NaN];

console.log(arr);
var count = 0;
var tempArr = [];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(isNaN(arr[i]));
    if (isNaN(arr[i])) {
        // console.log("NaN Present");
        var removeEle = arr.splice(i, 1);
        removeEle = removeEle.toString();
        removeEle = Number(removeEle);
        tempArr.push(removeEle);
        i--;
        count++;
    }
}
var newArr = arr.concat(tempArr);
console.log(arr);
console.log(tempArr);
console.log(newArr);