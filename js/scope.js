let a=10;
if(true) {
    const a=1;
    let b=2;
    var c=3;
    console.log("INNER:", a); //1 : local
}

// console.log(a); as it is was defined in local scope
// console.log(b); as it is was defined in local scope
console.log(c); // it has global scope and is not recommended to use
console.log("OUTER:", a) //10 : global 


console.log("*********CLOSURE in function*********");
function one() {
    let name="Abc";
    function two(){
        let age=10;
        console.log(`${name} is ${age} years old`);
    }
    two();
    // console.log("age", age); age is defined as a local var so cant be accessed
}
one();
console.log("*********CLOSURE in block*********");
if(true) {
    let var1=20;
    if(true) {
        let var2 =10;
        console.log("inner sum :", var1+var2);
    }
    // console.log("outer sum :", var1+var2); ar2 is not defined
}

console.log("*********Two ways to decalre functions*********");
console.log("simple ", addTwo(1,2)); // no error even if i call the function before declaring
function addTwo(a, b) {
    return a +b;
}

//console.log("using variable before ", sum(1,2)); Cannot access 'sum' before initialization
const sum = function(a, b) {
    return a +b;
}
console.log("using variable", sum(1,2));