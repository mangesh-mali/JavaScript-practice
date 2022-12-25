const prompt = require("prompt-sync")({ sigint: true });
var str = prompt("Enter String : ");

// str = "Suraj";
strNew = "";
// console.log(str);
for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    // console.log(str[i].charCodeAt(0));
    asciiVal = str[i].charCodeAt(0);
    if (asciiVal > 64 && asciiVal < 123) {
        if (asciiVal > 64 && asciiVal < 91) {
            // console.log("Capital");
            asciiVal = asciiVal + 32;
            // console.log(asciiVal);
            strNew = strNew + String.fromCharCode(asciiVal);
            // console.log(strNew);
        } else if (asciiVal > 96 && asciiVal < 123) {
            // console.log("Small");
            asciiVal = asciiVal - 32;
            // console.log(asciiVal);
            strNew = strNew + String.fromCharCode(asciiVal);
            // console.log(strNew);
        }
    } else if (asciiVal == 32) {
        strNew = strNew + String.fromCharCode(asciiVal);
        continue;
    } else {
        console.log("Enter Valid Characters");
        break;
    }
}
console.log("Output String : " + strNew);