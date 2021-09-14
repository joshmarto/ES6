//Object destructuring
const myObj = { first: "Name", lastname: "Jones", age: 16, height: "6ft" };
let { firstname, lastname, age, height } = myObj; //Keys must match to assignment variables

let myVar1, myVar2;
const myObj2 = { myVar1: "A", myVar2: "B" };
({ myVar1, myVar2 } = myObj2); // Parenthesis notifys interpreter we are trying to destructure
console.log(myVar1, myVar2);

//Assigning new variable names
const myObj3 = { a: "cool!", b: "Oh yeah!", c: "nice", d: "awesome" };
const { a: cool, b: yeah, c: nice, d: awesome } = myObj3; // New setup of asigment new variable names beside the matching key
console.log(yeah);

const myObj4 = { uuid: 134314309, username: "es6rulez", loggedin: new Date() };
const { uuid: userID, username: name, loggedin: lastLogin } = myObj4;
console.log(userID, name, lastLogin);

const myObj5 = { a1: 10, b1: 20, c1: 30, d1: 40 };
const { a1, b1, c1, d1, e1 = 50 } = myObj5;
console.log(a1, b1, c1, d1, e1);

function stateUser({ user = "Bob", memberType = "Premium" }) {
    console.log(`${user} is ${memberType}`);
}
stateUser({ user: "Steve" });

function isValid({ prop, a111 }) {
    const internalObj = {
        prop: prop,
        a111: a111,
        constructed: true
    };
    return internalObj;
}

const myObj6 = { prop: "I am valid", proop: "I am not valid", a111: "I am also not valid" };
console.log(isValid(myObj6));

const myObj7 = {
    title: "My address book",
    entries: [
        {
            name: "Bob",
            number: "555-5555",
            address: "123 Fake St",
            other: {
                cell: "555-3333",
                email: "bob@es6rulez.com"
            }
        },
        {
            name: "Jill",
            number: "555-1234",
            address: "155 Fake St",
            other: {
                cell: null,
                email: "jill@jill.co.uk"
            }
        },
        {
            name: "Billy",
            number: "555-8888",
            address: "555 Fake St",
            other: {
                cell: "555-1233",
                email: null
            }
        },
        {
            name: "Joan",
            number: "123-4444",
            address: "100 Fake Ave",
            other: {
                cell: "555-7779",
                email: null
            }
        }
    ],
    myPhone: "555-1111",
}

// const {title, entries: [{name:nnn, address}]} = myObj7;
// console.log(nnn, address);

const { title, entries } = myObj7;
for (const { name: n, address: a, other: { cell: c } } of entries) {
    console.log(`Name: ${n} and address: ${a} and cellphone ${c}`);
}

const myObj8 = {
    myProp1: "Ahh!",
    myProp2: [20, 50],
}

const {myProp1, myProp2: [xx, yy]} = myObj8;
console.log(xx, yy);