let arr = [1, 2, "mangesh", "suraj", "suvarna", 100, 5, 8, 7];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (isNaN(arr[i])) {
        console.log("true");
        arr.splice(i, 1, i * 2);
    }
}

console.log(arr);