//ANIMAL
function Animal(name, age, breed) {
    this.name = name;
    this.age = age;
}

Animal.prototype.makeNoise = function () {
    console.log(`generic animal noise`);
}

// DOG
function Dog(name, age, breed) {
    Animal.call(this, name, age);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Inheritance of prototype
Dog.prototype.constructor = Dog;
Dog.prototype.makeNoise = function () {
    console.log(`Bark, bark, woof`);
}

// CAT
function Cat(name, age, coloration) {
    Animal.call(this, name, age);
    this.coloration = coloration;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scratchPost = function () {
    console.log("Cat has scratched the post");
}

// KITTEN
function Kitten(name, age, coloration, litter) {
    Cat.call(this, name, age, coloration);
    this.litter = litter;
}
Kitten.prototype = Object.create(Cat.prototype);
Kitten.prototype.constructor = Kitten;

// DEMOSTRATION
console.log(Dog.prototype.constructor);
const barky = new Dog("Barky", 1, "Chihuahua");
const kitty = new Cat("Kitty", 3, "tabby");
const tinyKitty = new Kitten("Spot", 0.3, "Orange", 1);

console.log(barky.name);
console.log(tinyKitty.name);
console.log(tinyKitty.coloration);

console.log(Dog.prototype);

barky.makeNoise();
kitty.makeNoise();
tinyKitty.makeNoise();
kitty.scratchPost();
tinyKitty.scratchPost();


console.log(tinyKitty instanceof Kitten); // Checks instance
console.log(tinyKitty instanceof Cat);
console.log(tinyKitty instanceof Animal);
console.log(tinyKitty instanceof Dog);
