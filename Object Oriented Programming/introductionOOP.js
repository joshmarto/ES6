// Object-oriented JavaScript
/*
  - OOP: basic idea is that you use objects to represent real world
    things. Objects have own properties and funtions (methods)
  - Objects can contain data and other code to represent info about
    what you're trying to model
  - Data / methods inside the object is encapsulated
  - In clasic OOP, class is defined, then, when an instance of that
    class is created, all the properties and methods are copied over
    to the instance.
  - JavaScript is dynamic and does not provide a traditional
    class implementation per se.
  - JavaScript inheritance is pototype base
  - The prototype can have a prototype of its own
  - Nearly all objects in JavaScript are instances of Object
    which sits on top of prototype chain.
  - The prototype property's value is an object
  - Think of it as a bucket to store properties and methods
  - Prototype as a template and can have prototype proterties
    on its own
  - "The prototype property is where inherited members are defined"
*/

function Ship() {
    this.floats = true;
    this.material = "steel";
    this.whatAmI = function () {
        console.log(`I am made of ${this.material}`);
    }
}

const myShip = new Ship();
console.log(myShip.floats);
myShip.whatAmI();

const myObj = {
    a: 1,
    b: 2,
    c: function () {
        console.log("Got me!");
    }
}

console.log(myObj.a);
//Does myObj has a method called valueOf()?
//NO
//Does Object prototype has a method called valueOf()?
//YES
console.log(myObj.valueOf());

const myString = "Hello";
console.log(myString.charAt(0));
//Does myString has a method called charAt()?
//NO
//Does String prototype has a method called charAt()?
//YES
console.log(myString.valueOf());
//myString > String > Object

console.log(Object.keys(myObj));
myObj.valueOf();

console.log(myObj.hasOwnProperty("a")); //Verifies if the property exists in the object

const myArray = ["a", "b", "c"];
console.log(myArray);
myArray.push("d");
console.log(myArray);
console.log(Array.prototype);

const name1 = {
    name: "Billy",
    age: 16,
    sayName: function () {
        console.log(`My name is ${this.name}`);
    }
}

const name2 = Object.create(name1);
name2.sayName();
name2.name = "Jane Doe";
name2.sayName();

const name3 = Object.create(name2);
name3.sayName();
console.log(name3.hasOwnProperty("name")); // Returns false due the property has been inherited, unless it gets modified
