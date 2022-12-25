// Sorting the Sentence
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"

var s = "is2 sentence4 This1 a3";
var arr = s.split(' ');
var tempArr = [];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    lastWord = arr[i].charAt(arr[i].length - 1);
    console.log(lastWord);
    tempArr.push(lastWord);
}
console.log(tempArr);

// sort number
for (let i = 0; i < tempArr.length; i++) {
    for (let j = i + 1; j < tempArr.length; j++) {
        if (tempArr[i] > tempArr[j]) {
            temp = tempArr[i];
            tempS = arr[i];
            tempArr[i] = tempArr[j];
            arr[i] = arr[j];
            tempArr[j] = temp;
            arr[j] = tempS;
        }
    }
}
console.log(tempArr);
console.log(arr);

// remove Number from all words
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, -1);
}
console.log(arr);
finalString = arr.join(' ');
console.log(finalString); //sorted String