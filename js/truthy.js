const username = "yashika";
if(username) {
    console.log("username present");
} else {
    console.log("username not present");
}

var pass=""; 
var names = [];
if(pass) {// so if string is empty then considered as false
    console.log("pass entered correctly");
} else if(names) { // array is empty then it is considered as true
    console.log("name is missing");
}
 else {
    console.log("both pass and names are missing");
}

console.log("Falsy values are : false, 0, -0, 0n, empty string, null, undefined, NaN");
console.log("Truthy values are :"); // "false", "0", " ", [],{}, funtion(){}

console.log("To check if array is empty or not");
const arr =[];
if(arr.length === 0) {
    console.log("array is empty");  
}

console.log("To check if object is empty or not");
const obj = {};
if(Object.keys(obj).length === 0) {
    console.log("Object is empty");  
}

console.log("Nullish Coalesching operator ?? : null or undefined");

var a;
a= 5??10; // if first is available then first else sec

console.log(a); 