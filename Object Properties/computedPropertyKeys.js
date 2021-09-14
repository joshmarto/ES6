function objectBuilder(x, y, z, numTimes) {
    const allObjects = [];
    for (let i = 0; i < numTimes; i++) {
        const newObj = { x: i + 1, y, z };
        allObjects.push(newObj);
    }
    return allObjects;
}

const bob = objectBuilder(10, "Bob", false, 2);

// Computed property keys
// Allow use of [] which will evaluate(a.k.a. compute) as the
// property name

let myId = 0;
const idParam = "userID";
const computedObj = {
    [idParam + (myId += 1)]: "1003411",
    [idParam + ++myId]: "1003562",
    ["param" + "eter" + 10]: false,
}
// console.log(computedObj); // COUT

function capitalizer(word) {
    const a = word.charAt(0).toUpperCase();
    const b = word.slice(1).toLowerCase();
    return a + b;
}

const obj1 = {
    [capitalizer("heLlo")]: true,
};
// console.log(obj1); // COUT

function dataFormat(arr) {
    return arr.map(n => {
        return {
            ["userID" + n.x]: n
        }
    });
}
console.log(dataFormat(bob)); // COUT

function dataFormat2(arr) {
    const formattedObj = {};
    for (const prop of arr) {
        formattedObj["userID" + prop.x] = prop;
    }
    return formattedObj;
}
console.log(dataFormat2(bob)); // COUT
