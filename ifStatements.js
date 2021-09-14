// If Statement
/* Tels the code: if this is true, run more code


if (expression){
  Statement(s) to be executed if expression
  evaluates to truthy or falsey
}*/

const shouldSayHi = false;
if (shouldSayHi) {
    console.log("Hi there");
}

const numberFive = 5;
const stringFive = "5";
console.log(numberFive == stringFive);
const myList = [1, 2, 3];
const myOtherList = [1, 2, 3];
console.log(myList === myOtherList); // Paradigm of reference pointing

const bankAccountBalance = 123;
const costOfItem = 120;
const tax = 0.4;
const canSpendMoney = true;
const hasCreditCard = true;
const creditLimit = 200;
if (bankAccountBalance >= costOfItem + tax && canSpendMoney) {
    console.log("Balance enough! Checking balance...");
    if (tax >= 1) {
        console.log("Tax amount too high");
    }
} else {
    console.log("Too bad, balance is not enough");
}
// Not equal
console.log(bankAccountBalance !== costOfItem);

//------------FINAL LINE-----------------------
