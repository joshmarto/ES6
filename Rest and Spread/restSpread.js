// Spread syntax
/*
  - Can be used in places where (e.g.) functions expect
  multiple arguments, multiple elements, or multiple
  variables
*/
function spreadFunction(...multipleArgs) {
    console.log(multipleArgs);
}

// spreadFunction(1, 20, false, "hi", "hey!"); // COUT

const myArray = [1, 2, 3, 4];
const mySecondArray = [5, 6, 7, 8, 9];
const myThirdArray = [...myArray, ...mySecondArray];
// console.log(...myArray); // COUT
// console.log(myThirdArray); // COUT

function sayHello(x, y, z) {
    console.log(`Hello, ${x}, ${y}, ${z}`);
}
const helloArray = ["Bob", "Jane", "Peter"];
// sayHello(helloArray); // COUT
// Spread syntax way
// sayHello(...helloArray); // COUT
// OR
// Alternative to Function.prototype.apply
// sayHello.apply(null, helloArray); // COUT

const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
// arr1.push.apply(arr2);
arr1.push(...arr2);
// console.log(arr1); // COUT

// concat()
const arrDesert1 = ["Jelly Beans"];
const arrDesert2 = ["Donuts", "Chocolate"];
const arrDesert3 = ["Pie", "Lemonade"];
const arrDeserts = arrDesert1.concat(arrDesert2, arrDesert3);
// const arrDeserts = [...arrDesert1, ...arrDesert2, ...arrDesert3];
// console.log(arrDeserts); // COUT


// Add in a defined position
const listOfCarParts = ["Gasket", "Tires", "Radiator", "Muffler"];
const listOfPartsToInsert = ["Wipers", "Headligths"];
function listInserter(arr1, arr2, index) {
    const firstPart = arr1.slice(0, index);
    const secondPart = arr1.slice(index);
    // ES5
    //   const assembledCar = firstPart.concat(arr2, secondPart);
    // ES6
    const assembledCar = [...firstPart, ...arr2, ...secondPart];
    console.log(assembledCar);
}
// listInserter(listOfCarParts, listOfPartsToInsert, 2); // COUT
// Splice -> Modify the array on its self, instead of returning a new one
listOfCarParts.splice(0, 1);
// console.log(listOfCarParts); // COUT


const anotherArr = [1, 2, 3, 4];
//Clone method, creating a new element which does not depend of previous ref
const yetAnotherArr = [...anotherArr];

// vs rest operator
function hasManyArgs(x, y, ...restOfArgs) {
    console.log(x, y);
    for (const prop of restOfArgs) {
        console.log(prop + 10);
    }
}
// hasManyArgs("Hi", "Hello", 1, 50, 123, 6452, 1232, 243); // COUT


// Method definitions
// ES5, in objects literals, methods are defined as function expressions
const myObj = {
    id: 10,
    sayHi: function () {
        console.log("Hi");
    }
};
// myObj.sayHi();  // COUT
// ES6 has method definitions for creating methods
const myES6 = {
    id: 11,
    sayHi() {
        console.log('ES6 is cool');
    },
    sayBye() {
        console.log("Bye now");
    }
};
// myES6.sayHi(); // COUT
const anotherObj = {
    greet(arg1) {
        console.log(`Hi ${arg1}`);
    },
    anotherMethod(...args) {
        this.greet(args[0]);
        console.log(`I have ${args.length} arguments!`);
    }
};
anotherObj.anotherMethod("Tim", 1, false, true, [123], 61);
