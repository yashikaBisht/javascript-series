console.log("*******Example of this*********");
const user = {
    name: "Yashika",
    message: function() {
        console.log(`Hello ${this.name}`); // can not be defined witout using this as it will give error
    }
}
user.message();
user.name = "Tanya";
user.message();

console.log(this)// will give empty object while in browser it will give window object

function data() {
    const name="Yashika";
    console.log(this.name); // this will always be undefined (this will have so many data)
}
data();

console.log("*******Arrow function*********");

console.log("*******Explicit return*********");
const dataArr = () => {
    const name="Yashika";
    console.log(this); // empty object
}
dataArr();

console.log("*******Impliit return*********");
let sum = (a, b) => a+b; // if curly braces then return keyword is must
console.log(sum(1,2)); 

console.log("*******To return object incorrect way*********");
const obj = () => {{name:"Yashika"}}; //This function is returning undefined because the outer curly braces ({{...}}) are being interpreted as a block, not an object.
console.log(obj())

console.log("*******To return object correct way*********");
const obj1 = () => ({name:"Yashika"}); 
console.log(obj1())