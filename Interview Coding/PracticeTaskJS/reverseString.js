str = "Hi, this String is written in JavaScript.";
strRev = "";
for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    strRev = strRev + str[i];
}
console.log(str);
console.log(strRev);