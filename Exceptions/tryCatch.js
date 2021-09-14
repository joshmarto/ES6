// try...catch
// try{
//   throw "Exception!";
// }
// catch(e){
//   console.log(e);
// }


let myNumber = "Hello";
function checkIfNum(n) {
    if (isNaN(n)) {
        throw "Not a number!";
    } else {
        console.log(n);
    }
}

myErrorLog = [];
function errorHandler(e) {
    myErrorLog.push(e);
}

try {
    checkIfNum(myNumber);
}
catch (catchID) {
    errorHandler(catchID);
}


function MyString(string) {
    if (typeof string === "string") {
        this.value = string;
        this.getValue = function () {
            console.log(`Your string: ${this.value}.`);
        }
    } else if (typeof string === "boolean") {
        throw "Error!";
    } else {
        throw new StringExceptionError(string);
    }
}

function StringExceptionError(value) {
    this.value = value;
    this.message = "must be a string";
    this.toString = function () {
        console.log(`${this.value}: ${this.message}`);
    }
}

function verifyString(s) {
    let str;
    try {
        str = new MyString(s);
    }
    catch (e) {
        if (e instanceof StringExceptionError) {
            console.log("String exception " + e);
        } else {
            console.log("Other exception");
        }
    }
    finally {
        always();
    }
    return str;
}

function always() {
    console.log("Always runs");
}

const a = verifyString("I am string");
a.getValue();
const b = verifyString(true);

function finallyExample() {
    try {
        console.log("Hi");
        throw "test";
    }
    catch (e) {
        console.log(e);
        return true; // If a return goes her it will not reach last part of the code
    }
    finally { // Finally always run even with a previous return
        console.log("Can I run?");
    }
    console.log("I can't run");
}
console.log(finallyExample());