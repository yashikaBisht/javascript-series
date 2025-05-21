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