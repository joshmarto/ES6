// Loops
/* Quick and easy way to do something repeatedly
   Many type of loops but all do basically the same thing:
   repeat something (i.e. an action) a set number of times (could even
   be 0).*/
let numberOfLoops = 0;
while (numberOfLoops < 10){
  numberOfLoops += 1;
  console.log("I am looping " + numberOfLoops);
}

let num1 = 0;
let num2 = 0;
while (num2 < 0){
  num1 += num1;
  num2 += 1;
  console.log(num1);
}

function nameLooper(array, username){
  let index = 0;
  while (index < array.length){
    if(array[index] === username){
      console.log(array[index]);
      break;
    }
    index += 1;
  }
}


let condition = false;
do {
  const userInput = prompt("Enter q to exit");
  if (userInput === "q"){
    condition = false;
  } else{
    condition = true;
  }
} while(shouldRunOnlyOnce);


let totalMoney = 100;
do{
  checkIfCanPurchase();
} while(totalMoney > 500);

function checkIfCanPurchase(){
  if (totalMoney > 500){
    console.log("I can purchase");
  } else{
    console.log("Cannot purchase");
  }
}

// For loops
/* Repeat until a specified condition evaluates to false */
let index = 0;
for (index; index < 10; index++) {
    console.log(index);
}

function looperOfArrays(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let icecreams = ["vanila", "Chocolate", "Rocky road", "lemon"];
looperOfArrays(icecreams);

// Labels
outerloop:
for (var i = 0; i < 10; i++) {
    console.log("Loop #" + i);
    innerloop:
    for (var k = 0; k < 10; k++) {
        console.log("Inner loop #" + k);
        if (k === 4) {
            break outerloop;
        }
    }
}


// Main scope
function looper(value) {
    setTimeout(function () {
        console.log(value);
    }, 1000);
}

for (var i = 0; i < 10; i++) {
    looper(i);
}


// Block scope
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// For...in loop
/* Loop through object properties in arbitrary order
   Usually are found in objects 
   It returns iterated the keys of an object */
const users = { 1: "Sally", 2: "Billy", 3: "Ashley", 4: "Timmy" };
for (let property in users) {
    console.log(property);
}

// For each
const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"];
drinks.forEach((d) => {
    console.log(d);
});

// For...of loop
/* New loop in ES6 used to loop over iterable objects(arrays, strings,
   maps, sets, etc)
   For looping over data like values in an array*/
console.log("---------SEPARATION---------");
for (const d of drinks) {
    console.log(d);
}

const myString = "Hello!";
for (const character of myString) {
    console.log(character);
}

const names = ["Chris", "James", "Billy", "Bob", "Sally", "Chris", "Bob"];
const uniqueName = new Set(names);
for (const n of uniqueName) {
    console.log(n);
}
