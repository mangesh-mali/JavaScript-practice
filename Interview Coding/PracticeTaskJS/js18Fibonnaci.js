// program to generate fibonacci series up to n terms

// take input from the user

const prompt = require("prompt-sync")({ sigint: true });
var num = prompt("Enter the number of terms: ");

// const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1;

console.log('Fibonacci Series:');

for (let i = 1; i < num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(n2);
}