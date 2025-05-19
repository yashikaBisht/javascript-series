// Data is categorized into two category based on how data is stored or retrieved
//# Primitive (call by value): number, string, boolean, null, undefined, Symbol, BigInt

const id = Symbol('1');
const anotherId = Symbol("1");

console.log(id === anotherId);//false 

// # non primitive (call by refereence) : Object, Array, Functions
const obj1 = {
    name:"Yashika",
    val:20
}
const ar1 = ["Yas","Tan","Anu"];
const func = function() {
    console.log("Hello World!");
}

console.log(typeof obj1);
