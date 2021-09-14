/* Functions
   "A function is a JavaScript procedure - a set of statements
   that performs a task or calculates a value [...]"
   -Mozilla Developer Network
   */
const myName = "Josh";
function sayHi(name) {
    console.log("Hi" + name);
}
function sayBy() {
    console.log("Bye :(");
}

sayHi(myName);
//------------Nested Functions---------------
function doubleOp(num1, num2) {
    function squarer(x) {
        return x * x;
    }
    return squarer(num1) * num2;
}

console.log(doubleOp(2, 4));
//------------Advanced Functions--------------
/* Features of ES6 */
var sayHello = function () {
    console.log("Hi");
}
var vHi = () => {
    // Arrow function
    Console.log("Hi, I am an arrow function");
}
let result = (num1, num2) => {
    return num1 * num2;
}
const users = [
    { name: "Chris", age: 60 },
    { name: "Jane", age: 30 },
    { name: "Billy", age: 45 }
]

function mapUsers(myArray) {
    const userNameList = myArray.map(function (user) {
        return user.name;
    });
    return userNameList;
}
console.log(mapUsers(users));


const multiplier = (x, y) => x * y; // Another way to short the function


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(function (num) {
    return num == 5;
});


const doubleNumbers = (num) => {
    const numberContainer = [];
    num.forEach((n) => {
        const doubled = n * 2;
        numberContainer.push(doubled);
    });
    return numberContainer;
}
console.log(doubleNumbers(numbers));



function numMult(x = 5, y) {
    //Default values set up
    y = y || 10; // Value in case it would not be fulfilled by the parameter
    return x * y;
}
console.log(numMult());
console.log(numMult(20));


function stringSplitter(str = "How are you?") {
    return str.split(" ");
}
console.log(stringSplitter("Hi there, I am fine"));


const bankAcount = {
    canSpendMoney: true,
    hasCreditCard: true,
    balance: 100,
}
function canPurchaseItem(price, acct = bankAcount) {
    if (acct.canSpendMoney) {
        acct.balance -= price;
        if (acct.balance <= 0) {
            acct.canSpendMoney = false;
        }
        return true;
    } else {
        return false;
    }
}
console.log(canPurchaseItem(100));

function logAllArguments(x, y, z) { //Indefinite number of arguments
    console.log(arguments); // Creating the arguments object
    const args = Array.prototype.slice.call(arguments, logAllArguments.length); // Convession to an array
    console.log(args.sort()); // Display
}
function multiply(multiplier, ...nums) { // Definition of unknown quantity of parameters
    //   console.log(nums.sort());
    //   console.log(nums.length());
    return nums.map((n) => multiplier * n)
}
logAllArguments(1, 2, 3, 4, 5);
console.log(multiply(10, 5, 1, 3, 6)); // Function applied to undefine quantity of parameters



function Dog(year, breed) {
    this.age = year;
    this.type = breed;
}
const spike = Dog(3, "Golden Retrevier");
const fido = Dog(5, "Poodle");
console.log(spike);
console.log(fido);
