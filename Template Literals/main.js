// Template Literals
/* 
   - String literals allowing embedde expressions
   - Makes it easier to create multiline strings and
     allows string interpolation
   - Enclosed in back-ticks (`String goes in here`) instead of single quotes or double quotes
   - Can cointain placeholders
 */
let myFirstName = "Josh";
let myLastName = "Martinez";
let myAge = 20;
console.log(`Hello, my name is ${myFirstName} ${myLastName}, I am ${myAge} years old`);

let myNewList ="\
    <ul>\n\
        <li>I am item 1</li>\n\
        <li>I am item 2</li>\n\
        <li>I am item 3</li>\n\
    </ul>";

const myOtherNewList = `
    <ul>
        <li>I am ES6 number 1</li>
        <li>I am item 2</li>
        <li>I am item 3</li>
        <li>I am item 4</li>
    </ul>
    `;
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = myOtherNewList;

const dateNow = new Date();
console.log(`Today is: ${dateNow.toLocaleString()}`);

console.log(`Result is : ${50 * 100}`);

const myArray = [1, 2, 3, 4, 5];
//myArray.map((num) => num + 5);
//console.log(myArray);
console.log(`${myArray.map((num) => num + 5)}`);

const pizzaTopings = ["cheese", "mushrooms", "sauce", "pepperoni", "pineapple"];
const myPizzaDiv = `
    <article>
        <h1>Pizza Ingredients</h1>
        <ul>
            ${pizzaTopings.map((ingredient) => `<li>${ingredient}</li >`).join("")}
        </ul>
    </article>
`;
const pizzaDiv = document.getElementById("itsADiv");
pizzaDiv.innerHTML = myPizzaDiv;

function templateParser(arrayOfStrings, expression1, expression2) {
    console.log(`"${arrayOfStrings}", "${expression1}", "${expression2}"`);
}

const person = "Chris";
const aged = 29;

const myTemplateLiteral = templateParser`I am ${person} aged: ${aged}`;
