//IIFE : Immediately invoked function expression

/*function dbConnection() {
    console.log("DB connected");
}
dbConnection();
*/

console.log("IIFE: Immediately invoked function expression : (decalaration)(execution)");
console.log("Called just after decalaration, used to void the global scope variable and declaration pollution");
(function dbConnection() {
    console.log("Its a named IIFE : DB connected");
})(); //semicolon is mandatory if multiple iife

console.log("IIFE using arrow");
(() =>  console.log("DB connected 2"))();

console.log("IIFE with argument");
(name => console.log(`hello ${name}`))("yashika");

