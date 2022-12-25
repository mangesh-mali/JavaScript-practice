var a = "Welcome to Angular";
var b = a.split(' ');
var len = b.length;
// var c = b.reverse(0);
console.log(a);
console.log(len);
console.log(b);

for (let i = 0; i < len; i++) {
    var c = (b[i].split('').reverse().join(''));
    // console.log(c);
    if (i == 0) {
        var e = c + " ";
    } else if (i == len - 1) {
        e = e + c;
    }
    else {
        e = e + c + " ";
    }
    // console.log(e);
}
// console.log(e);
// var c = (b[0].split('').reverse().join(''));
// var d = (b[1].split('').reverse().join(''));
// var e = c + " " + d;
var f = e.split(' ');
var j = f.join(' ');
console.log(f);
console.log(j);
// console.log(c);