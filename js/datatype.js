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

// ---------------------------------------------------------
//Two types of memory : Stack (primitive are stored, stack provide the copy of the variable) and heap(non primitive are stored, it provide the reference of the variable)

console.log("Example of primitive stored in stack"); 
let myName= "Yashika";
let yourName = myName;
yourName ="Anukool";
console.log(myName); //Yashika
console.log(yourName); //Anukool


console.log("Example of non-primitive stored in heap"); 
let obj3 = {
    name: "Yashika"
}
let obj4 = obj3;
obj4.name = "Anukool";
console.log(obj3.name); //Anukool
console.log(obj4.name); //Anukool


