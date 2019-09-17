//Module Wrapper Function
// (function (exports, require, module, __filename, __dirname){

//})

console.log(__dirname, __filename);

class Person{
    constructor(name, age){
        this.name = name;
        this.age=age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
// module.exports = Person;
// const Person = require('./person');

const person1 = new Person('John Doe', 30);
person1.greeting();
