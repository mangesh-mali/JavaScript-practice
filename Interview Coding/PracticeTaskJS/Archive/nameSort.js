var names = ['Mangesh', 'Vikas', 'Suraj', 'Anup', 'Aakash', 'Chris'];
var newName = names.slice();
// , 'Suraj', 'Anup', 'Alex', 'Chris'
var a = [];
var newArr = [];
var len = [];
len = names.map((x) => x.length);
// console.log(len);

var t = len[0];
for (let i = 0; i < len.length; i++) {
    if (t > len[i]) {
        // console.log("true");
        t = len[i];
    }
}
// console.log(t);

console.log("Original: " + names);

function nameSort(passArr, z) {
    var nameLower = passArr.map((x) => x.toLowerCase());
    console.log(nameLower);
    for (let i = 0; i < nameLower.length; i++) {
        // console.log(nameLower[i]);
        for (let j = z - 1; j < z; j++) {
            b = nameLower[i].charCodeAt(j);
            newArr.push(b);
        }
    }
    console.log(newArr);
    var sortArr = newArr.slice();
    // console.log(sortArr);

    for (let i = 0; i < sortArr.length; i++) {
        for (let j = i + 1; j < sortArr.length; j++) {
            if (sortArr[i] > sortArr[j]) {
                temp = sortArr[i];
                newTemp = newName[i] //name
                sortArr[i] = sortArr[j];
                newName[i] = newName[j]; //name
                sortArr[j] = temp;
                newName[j] = newTemp; //name
            }
        }
    }
    console.log(sortArr);
    console.log(newName);
    // console.log(names);

    for (let i = 0; i < sortArr.length; i++) {
        for (let j = i + 1; j < sortArr.length; j++) {
            if (sortArr[i] == sortArr[j]) {
                console.log("true");
                console.log(sortArr[i]);
                console.log(i);
                console.log(j);
                // nameSort(newName,z+1);
            }
        }
    }
}

nameSort(newName, 1);