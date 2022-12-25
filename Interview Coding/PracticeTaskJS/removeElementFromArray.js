var arr = ['apple', 'orange', 'grape', 'citrus', 'limes', 'grape'];

var elementToRemove = 'grape';

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elementToRemove) {
        arr.splice(i, 1);
    }
}
console.log(arr);