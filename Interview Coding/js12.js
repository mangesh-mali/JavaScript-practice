// abcz = "abc_100_pqr_50_10_xyz" solve it for getting output 160

abc = "abc_100_pqr_50_10_xyz";
var arr = abc.split('_');
console.log(arr);

var sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(arr[i]);
        var a = Number(arr[i]);
        // console.log("sum");
        sum += a;
    }
}
console.log(arr);
console.log(sum);
