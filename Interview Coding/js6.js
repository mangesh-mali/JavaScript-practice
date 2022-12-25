let obj = {
    name: "Suraj",
    age: 25,
    immediate: true,
    exp: 2,
};
let b = Object.values(obj)
let c = b.filter(Number)
console.log(c)
d = c.map((x) => { return x * 2 })
// console.log(d)
for (let x of d) {
    // console.log(x)
    if (x == obj.age * 2) {
        obj.age = x
    }
    if (x == obj.exp * 2) {
        obj.exp = x
    }
}
console.log(obj)