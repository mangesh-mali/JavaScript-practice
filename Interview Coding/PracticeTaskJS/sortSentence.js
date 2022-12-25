// Sorting the Sentence
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"

var s = "is2 sentence4 This1 a3";
var newSArr = [];
var sArr = s.split(' ');
console.log(sArr);

for (let i = 0; i < sArr.length; i++) {
    lastWordIndex = sArr[i].length - 1
    console.log(sArr[i][lastWordIndex]);
    lastWordNumber = sArr[i][lastWordIndex];
    newSArr.push(lastWordNumber);
}

//sort
for (let i = 0; i < newSArr.length; i++) {
    for (let j = i + 1; j < newSArr.length; j++) {
        if (newSArr[i] > newSArr[j]) {
            temp = newSArr[i];
            temp1 = sArr[i];
            newSArr[i] = newSArr[j];
            sArr[i] = sArr[j];
            newSArr[j] = temp;
            sArr[j] = temp1;
        }
    }
}
console.log(newSArr);
console.log(sArr); //sorted

// remove Number from all words
for (let i = 0; i < sArr.length; i++) {
    sArr[i] = sArr[i].slice(0, -1);
}
console.log(sArr);
finalString = sArr.join(' ');
console.log(finalString); //sorted String