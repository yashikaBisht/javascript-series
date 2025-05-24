function user(name, age) {
    this.name = name;
    this.age = age;
}

user.prototype.increment = function() {
    this.age++;
}

user.prototype.printDetail = function() {
    console.log(this.name, this.age);
}

const user1 = new user("Yashi", 30);
const user2 = new user("Tani", 29);

user1.printDetail();
user2.printDetail();

class data {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    increment() {
        this.age++
    }

    printDetail = function() {
        console.log(this.name, this.age);
    }
}

const val = new data("yads", 10);
console.log(val);