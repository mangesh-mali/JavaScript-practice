var obj = {
    name: "suraj",
    age: 23,
    salary: 25000,
    designation: "Developer"
}

console.log(obj);

for (let i in obj) {
    console.log(obj[i]);
    var val = obj[i];

    //1st way
    if (!isNaN(val)) {
        obj[i] = obj[i] * 2;
    }

    //2nd way
    if (typeof (val) == "number") {
        obj[i] = obj[i] * 2;
    }
}

console.log(obj);