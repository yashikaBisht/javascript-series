console.log("**********Function**************");
function addTwoNumbers1(num1, num2) {
    console.log(num1 + num2);
}
console.log(addTwoNumbers1()); // undefined

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers()); //NaN
console.log(addTwoNumbers(1, 3));//4
console.log(addTwoNumbers(1, "3"));//13
console.log(addTwoNumbers(1, null));//1
console.log(addTwoNumbers(null, null));//0
console.log(addTwoNumbers(null, 3));//3

console.log("**********number**************");
function calculatePrice(...num1) { // rest or spread operator -> return an array
    return num1;
}

console.log(calculatePrice(10,11,24));//[ 10, 11, 24 ]

function calculatePrice2(num, num2, ...num1) { // rest or spread operator -> return an array
    return num1;
}

console.log(calculatePrice2(10,11,24,23));//[ 24, 23 ]

console.log("**********Object**************");

const user = {
    name: "yashika",
    occ: "Engg"
}
function getObject(anyObj) {
    console.log(`My name is ${anyObj.name} and I am an ${anyObj.occ}`);
}
getObject(user);
// getObject(); give error : Cannot read properties of undefined (reading 'name')
getObject({
    name: "ab"
}); // give undefined only for anyObj.occ

console.log("**********Array**************");
const ar1 = [1,34,3,4,5];
const ar2 = Array.of(1,2,3,4,5);
console.log(ar1);
console.log(ar2);

function getSecSum(arr) {
    return arr[1];
}

console.log(getSecSum(ar1));