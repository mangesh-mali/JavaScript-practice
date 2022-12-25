// function abc(x) { return (y){ return (x+y) } then how we call above function so that output should be addition?

function abc(x) {
    return (y) => { return (x + y) }
}

var a = abc(10)(5);

console.log(a);

//implementation of currying or closure function