// Callbacks and Promises
/*
  A way to write asynchronous JavaScript
  
  Callback:
  - A callback funtion is a function that is passed to another function
    as a parameter.
  - This inner function is called at some point during the executition
    of the containing function.
  - In other words, it's "called back" at some specified point
    inside the containing function's body.
  - 
*/

function shouldGoFirst(callBack) {
    setTimeout(() => {
        console.log("I should always go first");
        callBack();
    }, 1000)
}

function shouldGoSecond() {
    console.log("Should always go second");
}

shouldGoFirst(shouldGoSecond);

function sumUpNumbers(num1, num2, cb) {
    let summedValue;
    setTimeout(() => {
        summedValue = num1 + num2;
        cb(summedValue);
    }, 1000);
}

function logSummedValue(val) {
    console.log(`The summed total is ${val}`);
}

//sumUpNumbers(100, 150, logSummedValue);

//Callback function
function sayWhenDone(loopCount) {
    console.log(`Done :D. Looped ${loopCount} times.`);
}

//Parent function
function looper(/*number*/ arr, cb) {
    let i = 0;
    for (i; i < /*number*/ arr.length; i++) {
        const name = arr[i];
        const newName = name.charAt(0).toUpperCase() + name.slice(1);
        arr[i] = newName;
    }
    cb(i);
}

const myNames = ["chris", "russell", "toby", "angela"];

looper(100, sayWhenDone);
looper(myNames, sayWhenDone);
console.log(myNames);

function anotherLogger(num1, num2, cb) {
    const squaredNums = (num1 * num1) + (num2 * num2);
    console.log(squaredNums);
    if (cb && typeof (callback) === "function") { // Checks if the argument is a callback
        cb(squaredNums);
    }
}

anotherLogger(10, 50, function (p) {
    console.log(`Squared and summed equals ${p}`);
});


// DOM interaction
const myDiv = document.getElementById("main");
const myButton = document.querySelector("button");
const fakeData = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}
const myPara = document.getElementById("content");

myButton.addEventListener("click", function () {
    requestData(populateDOM);
})

function requestData(cb) {
    // Fake server request and response
    let data = "Loading...";
    cb(data);
    setTimeout(() => {
        // Response from server
        data = fakeData.text;
        cb(data);
    }, 2000);
}

function populateDOM(data) {
    myPara.innerText += `${data}`;
}

function populateDOM(data) {
    myPara.innerHTML = data;
}


function counter() {
    setTimeout(() => {
        console.log("First");
        setTimeout(() => {
            console.log("Second");
            setTimeout(() => {
                console.log("Third");
                setTimeout(() => {
                    console.log("Fourth");
                }, 400);
            }, 600);
        }, 800);
    }, 1000);
}

counter();

function numCruncher(num, cb) {
    const newNum = num * num;
    cb(newNum);
}

function numCruncher2(num, cb) {
    const newNum = num / 100;
    cb(newNum);
}

function totalSum(a, b, cb) {
    cb(a + b);
}

function crunchNumbers(a, b, cb1, cb2, cb3) {
    cb1(a, function (x) {
        cb2(b, function (y) {
            cb3(x, y, function (result) {
                console.log(result);
            });
        });
    });
}

crunchNumbers(5, 10, numCruncher, numCruncher2, totalSum);