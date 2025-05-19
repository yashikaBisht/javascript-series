const name = "Yashika";
const dest = "Software engg";
console.log(`Hello! my name is ${name} and i am ${dest}`);


const name1 =  new String("Yashika");
console.log(name1[0]);//Y
console.log(name1.__proto__);
console.log(name1.indexOf('y'));
console.log(name1.substring(0,5));
console.log(name1.slice(-5,5));// need to undestand more


const url="www.dfd@dsfsdf.com";
console.log(url.replace('df','abc')); //fist occurence
console.log(url.replaceAll('df','abc')); //all