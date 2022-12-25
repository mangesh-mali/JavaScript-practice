let arr = ["sss", "ddd", "sss", "sss", "mmm", "ddd"]


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    console.log(arr[i] + " is being repeated " + count + " times")
}

