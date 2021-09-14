// function Animal(name, age, breed){
//   const obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.breed = breed;
//   return obj;
// }

function Animal(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    //   this.sayBreed = function(){
    //     console.log(`My breed is ${this.breed}`);
    //   }
}

// Adding function sayBreed to prototype
Animal.prototype.sayBreed = function () {
    console.log(`I am a ${this.breed}`);
}
// It will just affect the instances below and can be redefined

const dog1 = new Animal("Spyke", 3, "Labrador");
const dog2 = new Animal("Spot", 2, "Golden Retriever");
console.log(dog1.name);
console.log(Animal.prototype);
dog1.sayBreed();
dog2.sayBreed();
//Dog inherits from Animal, which inherits from prototype Object

Object.prototype.sayHello = function () {
    console.log("Hello"); // NOT recommended at all
}

dog1.sayHello();

const myArray = [];
myArray.sayHello();
