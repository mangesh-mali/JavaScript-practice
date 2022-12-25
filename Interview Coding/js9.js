// var c= ABCD456EF789GH;
// Output: ABCDEFGH and 456789

var str = "ABCD456EF789GH";
var char = "";
var num = "";
for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (isNaN(str[i])) {
        char = char + str[i];
    } else {
        num = num + str[i];
    }
}

console.log(char);
console.log(num);