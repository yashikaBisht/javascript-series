const arr = ["yas","tas","ad"];

console.log("For loop example :");
for (let i=0; i< arr.length; i++) {
    console.log(arr[i]);
}

//for of -> for (const iterator of object)
console.log("For of loop example :");
for (const i of arr) {
    console.log(i);
}

const name="Yashika";
console.log("For of loop example for String :");
for (const j of name) {
    console.log(`char ${j}`);
}


console.log("For of loop example for Map :");
let map1 = new Map();
map1.set("yas",10);
map1.set("Tas",100);
map1.set("Ras",50);

console.log("both key and value together")
for(const key of map1) {
    console.log(key); //will give both key and value together
}

console.log("particular key or value or both together")
for(const [key, value] of map1) {
    console.log(key); //will give both key and value together
}

console.log("Object is not iterabe through for of")


console.log("For in for Object :");
const obj = {
    name:"Yas",
    age: 30
}
for (const key in obj) {
    console.log(`${key} has value ${obj[key]}`)
}

console.log("For in for array :");
for (const key in arr) {
    console.log(arr[key]);
}

console.log("For in for map :");
for (const key in map1) {
    console.log(key); // map is not iterablethrough for in
}

console.log("for each :");
arr.forEach(function (num) { 
    console.log(num);
})

console.log("if function is already defined but you want to call in foreach");
function printMyName(num) {
    console.log("Hello", num);
}
arr.forEach(printMyName);

console.log("object in array :");
const list = [ 
    {
        name : "yashika",
        age: 10
    },
    {
        name : "Ta",
        age: 20
    },
    {
        name : "An",
        age: 30
    }
]
list.forEach((obj) => {
    console.log(obj.name);
})