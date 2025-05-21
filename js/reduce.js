const ar = [1,2,3,4];
const sum = ar.reduce(function (acc, initial) {
 return acc+initial;
}, 0);
console.log("function", sum);

const sum1 = ar.reduce( (acc, initial) => acc+initial, 0);
console.log("arrows", sum1);
