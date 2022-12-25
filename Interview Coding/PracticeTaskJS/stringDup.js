var str = "aabcdeepqrzz";
var str1 = str.split('');
console.log(str1);
var str2 = [...new Set(str)];
console.log(str2);
var str3 = str2.toString();
console.log(str3);