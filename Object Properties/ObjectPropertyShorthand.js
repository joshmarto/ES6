// Object property short hands
const a = 10;
const b = 20;
const c = 30;
const d = {
    a: a,
    b: b,
    c: c
}
const e = {
    a,
    b,
    c
}
const { d: dRenamed } = e;

function objectBuilder(x, y, z, numTimes) {
    const allObjects = [];
    for (let i = 0; i < numTimes; i++) {
        const newObj = { x: i + 1, y, z };
        allObjects.push(newObj);
    }
    return allObjects;
}

// console.log(objectBuilder(10, "Bob", false, 2)); // COUT
const bob = objectBuilder(10, "Bob", false, 2);
const { x: bobID } = bob[0];
console.log(bobID); // COUT
