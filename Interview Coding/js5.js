var obj = {
    name: "suraj",
    age: 23,
    salary: 25000,
    designation: "Developer"
}

console.log(obj);

console.log(Object.entries(obj));
var arr = Object.entries(obj);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][1]);
    if (!isNaN(arr[i][1])) {
        console.log("true");
        console.log(arr[i][1] * 2);
        console.log(arr[i][0]);
        var key = arr[i][0];
        console.log(key);

        obj[key] = arr[i][1] * 2
    }
}
console.log(obj);