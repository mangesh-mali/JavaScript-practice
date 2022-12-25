var names = ['Shubh', 'Mangesh', 'Suraj', 'Vikas', 'Suvarna', 'Anup', 'Satish', 'Sainath', 'Aakash', 'Chris', 'Alex'];
var copyName = names.slice();
var a = [];
var arrASCII = [];
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
console.log(t);
console.log("Original Names:");
console.log(names);
var copyNameLower = copyName.map((x) => x.toLowerCase());
// console.log(copyNameLower);

for (let j = t - 1; j >= 0; j--) {
    arrASCII = [];
    for (let i = 0; i < copyNameLower.length; i++) {
        // console.log(copyNameLower[i]);
        // console.log(copyNameLower[i][j]);
        b = copyNameLower[i].charCodeAt(j);
        // console.log(b);
        arrASCII.push(b);
        if (b > 0) {
        }
    }
    console.log(arrASCII);
    console.log(arrASCII.findIndex((n) => Number.isNaN(n)));
    var count = 0;
    var tempArr = [];
    var tempName = [];
    var tempNameCopy = [];
    for (let i = 0; i < arrASCII.length; i++) {
        // console.log(arr[i]);
        // console.log(isNaN(arr[i]));
        if (isNaN(arrASCII[i])) {
            // console.log("NaN Present");
            var removeEle = arrASCII.splice(i, 1);
            var removeName = copyNameLower.splice(i, 1);
            var removeNameCopy = copyName.splice(i, 1);

            removeEle = removeEle.toString();
            removeName = removeName.toString();
            removeNameCopy = removeNameCopy.toString();

            removeEle = Number(removeEle);
            // removeName = String()

            tempArr.push(removeEle);
            tempName.push(removeName);
            tempNameCopy.push(removeNameCopy);
            i--;
            count++;
        }
    }
    var arrASCII = arrASCII.concat(tempArr);
    var copyNameLower = copyNameLower.concat(tempName);
    var copyName = copyName.concat(tempNameCopy);

    console.log(arrASCII);
    console.log(copyNameLower);
    console.log(copyName);


    // console.log(NaN == NaN);
    for (let i = 0; i < arrASCII.length; i++) {
        for (let j = i + 1; j < arrASCII.length; j++) {
            if (arrASCII[i] > arrASCII[j]) {
                temp = arrASCII[i]; //asciiArray sorting
                newTemp = copyName[i] //copyName sorting
                lTemp = copyNameLower[i]; //copyNameLowerCase sorting
                arrASCII[i] = arrASCII[j];//asciiArray sorting
                copyName[i] = copyName[j]; //copyName sorting
                copyNameLower[i] = copyNameLower[j];  //copyNameLowerCase sorting
                arrASCII[j] = temp;//asciiArray sorting
                copyName[j] = newTemp; //copyName sorting
                copyNameLower[j] = lTemp; //copyNameLowerCase sorting
            }
        }
    }
    // console.log(arrASCII);
    // console.log(copyName);
    // console.log(copyNameLower);
}
console.log("Alphabetically Sort:")
console.log(copyName);