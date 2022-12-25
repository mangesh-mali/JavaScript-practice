var names = ['Ady', 'Ash', 'Barry', 'Gare', 'Hola', 'John', 'Kim', 'Ola', 'Vish', 'Zuri'];
var copyName = names.slice();
var copyNameLower = copyName.map((x) => x.toLowerCase());
var len = [];
len = names.map((x) => x.length);
// console.log(len);
var t = 0;
for (let i = 0; i < len.length; i++) {
    if (t < len[i]) {
        // console.log("true");
        t = len[i];
    }
}
// console.log(t);
console.log("Original Names:");
console.log(names);

for (let j = t - 1; j >= 0; j--) {
    arrASCII = [];
    // console.log(j);
    for (let i = 0; i < copyNameLower.length; i++) {
        // console.log(copyNameLower[i]);
        // console.log(copyNameLower[i][j]);
        b = copyNameLower[i].charCodeAt(j);
        // console.log(b);
        if (isNaN(b)) {
            b = 150 + i;
        }
        var foundDuplicate = arrASCII.includes(b)
        // console.log(foundDuplicate);
        if (foundDuplicate) {
            b = b + (i / t);
        }
        arrASCII.push(b);
    }
    console.log(arrASCII);
    for (let i = 0; i < arrASCII.length; i++) {
        for (let j = i + 1; j < arrASCII.length; j++) {
            if (arrASCII[i] > arrASCII[j]) {
                temp = arrASCII[i]; //asciiArray sorting
                newTemp = copyName[i] //copyName sorting
                temp1 = copyNameLower[i]; //copyNameLowerCase sorting
                arrASCII[i] = arrASCII[j];//asciiArray sorting
                copyName[i] = copyName[j]; //copyName sorting
                copyNameLower[i] = copyNameLower[j];  //copyNameLowerCase sorting
                arrASCII[j] = temp;//asciiArray sorting
                copyName[j] = newTemp; //copyName sorting
                copyNameLower[j] = temp1; //copyNameLowerCase sorting
            }
        }
    }
    // console.log(arrASCII);
    // console.log(copyNameLower);
    // console.log(copyName);
}
console.log("Alphabetically Sort:")
console.log(copyName);