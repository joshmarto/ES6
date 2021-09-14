//Destructuring
/*
  - "The destructuring assingment syntax is a
    JavaScript expression that makes it possible
    to extract data from array or objects in to
    distincnt variables" - Mozilla Developer Nerwork
  - Destructuring syntax can be used on left-hand
    side assignments
*/
const myArray = [1, 2, 3, 4, 5, 6];
const [x, y, z, a, b, c] = myArray;
console.log(c);
const mySecondArray = ["Jane Doe", "John Doe", "Billy Bob"];
let name1, name2, name3, name4;
[name1, name2, name3, name4 = "I'm default :D"] = mySecondArray;
console.log(name1, name2, name3, name4);

let aa = 100;
let bb = 200;
let cc = 500;
let temp = cc;
// ES5 - normal way
// console.log(aa, bb, cc);
// // Buble method for swap
// console.log("-");
// cc = bb;
// bb = temp;
// console.log(aa, bb, cc);

//ES6
console.log(aa, bb, cc);
[bb, cc] = [cc, bb];
console.log("-");
console.log(aa, bb, cc);

//Use with functions
function arrayFilter(arr, term) {
    return arr.filter((t) => t === term);
}
const [result] = arrayFilter(["Chicken", "Fish", "Tofu", "Pizza", "Icecream"], "Fish");
//console.log(result);

//Can igoner some values
const anotherArray = [10, 20, 50, 100, 1000, 30];
const [numA, numB, , numC, , numD] = anotherArray;
console.log(`First: ${numA} Second: ${numB} Fourth: ${numC} Sixth: ${numD}`);

//Can use rest pattern
function sayHi(firstArg, ...restOfArgs) {
    console.log(`Hi ${firstArg}`);
    console.log(restOfArgs);
}

sayHi("Chris", 2, "123 fake st");
const yetArr = ["Dogs", "Cats", "Birds", "Snakes", "Hedgehogs"];
const [dogString, catString, ...otherAnimals] = yetArr;
console.log(dogString, catString, otherAnimals)