// Object-Oriented Programming Part 2: Classes
/*
  Classes in ES6 are just syntactical sugar over JavaScript's
  existing prototype-based inheritance
  Simple, clean syntax to create objects and take care of inheritance
  
*/

// Pre-ES6 way
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greetings = function () {
    console.log("Greetings :D");
}

function Employee(name, age, role) {
    Person.call(this, name, age);
    this.role = role;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const bill = new Employee("Bill", 41, "Janitor");
bill.greetings();


// ES6 way
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const bob = new Person("Bob", 30);
console.log(bob);
console.log(Person.prototype);


const Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //     this.greetings = function(){ // Method defined within the constructor
        //       console.log("Classes are cool!");
        //     }
    }
    greetings() { // Method defined within the prototype
        console.log("Classes are cool!");
    }
}

const mark = new Person("Mark", 29);
const janeDoe = new Person("Jane Doe", 40);
// A class cannot be called before being defined
janeDoe.greetings();

Person.prototype.greetings = function () {
    console.log("Now I say something else");
}
janeDoe.greetings();
