// Reverse each word from the sentence (Note: without using any built-in function)
// i/n -> "my name is abc"
// o/p-> "ym eman si cba"
function rst(str) {
    revstr = "";
    arr = [];
    newStr = "";
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        ascii = str[i].charCodeAt(0);
        if (ascii == 32) { //32 value is for blank space
            arr.push(newStr);
            newStr = "";
        } else {
            newStr += str[i];
        }
    }
    arr.push(newStr); //push last word
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        for (let j = arr[i].length - 1; j >= 0; j--) {
            revstr += arr[i][j];
        }
        revstr += " "; //add blank space after each element
    }
    return revstr;

}
console.log(rst("my name is abc"));