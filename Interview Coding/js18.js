const arr = [
    {
        firstName: 'Anshuman',
        lastName: 'Yadav',
        extra: {
            nestedArray: [1, 2, 4, 6, 7, 10],
        },
    },
    {
        firstName: 'Utkarsh',
        lastName: 'Rawat',
        'extra value': {
            getMyValue: 'Great!!!',
        },
    },
];
//   Hyatla 7 kasa seprate karaycha

console.log(arr[0].extra.nestedArray);
newArr = arr[0].extra.nestedArray;
foundEle = 7;
for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
    if (newArr[i] == foundEle) {
        arr[0].extra.nestedArray.splice(i, 1);
    }
}
console.log(arr);
console.log(arr[0]);