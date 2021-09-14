// Exception handling
// const myObj = {a:1, b:2};
// myObj.map((obj) => console.log(obj)); // Shows an error


// Throw your own exception
/* 
   - Use throw statement to throw own exception
   - You specify the expression containing the value to be trown
     e.g.: throw expression
   - Can throw any expression
*/
// throw "New error!"

const myObjException = {
    toString: function () {
        return "This is not a number";
    }
}
function checkIfNum(n) {
    if (isNaN(n)) {
        throw myObjException;
    } else {
        console.log(n);
    }
}

checkIfNum(1);
//checkIfNum("Hi");

function myExceptionMessage(message) {
    this.message = message;
    this.name = "My exception";
    this.toString = function () {
        return this.name + ": " + this.message;
    }
}

throw new myExceptionMessage("Field invalid");
throw new myExceptionMessage("Missing data");