// Switch Statement
const myFruit = "Apple";


// if statement
if (myFruit === "Apple") {
    console.log("Awesome! I love apples");
} else if (myFruit === "Orange") {
    console.log("Oranges are cool");
} else if (myFruit === "Pear") {
    console.log("Pears are healty");
} else {
    console.log("That sounds pretty OK");
}

// switch
function fruitLogger(fruit) {
    switch (fruit) {
        case "Apple":
            console.log("Awesome! I love apples");
            break;
        case "Orange":
            console.log("Good choice");
            break;
        case "Banana":
            console.log("OK");
            break;
        case "Pear":
        case "Grape":
            console.log("Really cool");
        default:
            console.log("I didn't understand that but sure");
            break;
    }
}


