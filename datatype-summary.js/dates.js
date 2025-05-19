let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());


let myDate= new Date(1994, 10, 6, 13, 6); // year month(starts from 0) day hr min
console.log(myDate);
console.log(myDate.toString());


let currentDate = Date.now();
console.log(currentDate);
console.log(Math.floor(currentDate/1000));

let dateObj = new Date();
console.log(dateObj.getDate());
