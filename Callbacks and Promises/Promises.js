// Promises
/*
  - "A promise is a proxy for a value not necessarily known
     when the promise is created" = Mozilla Developer Network
  - Promises are similar to callbacks or use for async computations
  - Think of a promise as representing a value that may be available
    now, later or never
  - Can associate a handler with an async action
  - A promise exist in these states:
    - Pending: initial state, not fulfilled
    - Fulfilled: OK, got it!
    - Rejected: failed
*/

const testPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) { // Rejects the promise 50% of the time
        reject("promise no good! Rejected");
    }
    setTimeout(() => {
        resolve("Promise OK!");
    }, 1000);
});

testPromise.then((resolveMessage) => {
    console.log(`Looks like: ${resolveMessage}`);
}).then(() => {
    console.log("Inside this then statement");
}).then(() => {
    console.log("Promises are awesome!");
}).catch((rejectMessage) => {
    console.log(`Error: ${rejectMessage}`);
});

function numAdder(n1, n2) {
    return new Promise((resolve, reject) => {
        //reject("not today");
        const addedNums = n1 + n2;
        setTimeout(() => {
            resolve(addedNums);
        }, 500);
    })
}

function numSquare(num) {
    return new Promise((resolve, reject) => {
        if (Math.random() > .5) { // Rejects the promise 50% of times
            reject("nope");
        }
        setTimeout(() => {
            resolve(num * num);
        }, 800);
    })
}

numAdder(10, 10).then(data => numSquare(data)).then(moreData => console.log(moreData)).catch(err => console.log(err));


// DEMOSTRATION OF RESOLVE
Promise.resolve()
    .then(data => console.log(data));

function alwaysResolves() {
    return Promise.resolve("I love resolving :D");
}

alwaysResolves().then(data => console.log(data));

const prom = Promise.resolve([10, 20, 30]);
prom
    .then(nums => nums.map(num => num * 10))
    .then(transformedNums => console.log(transformedNums));

const anotherProm = Promise.resolve({ text: "resolved :D" });
anotherProm
    .then(data => console.log(data));

// DEMOSTRATION OF REJECT
// 1st way to catch a rejection
Promise.reject()
    .then(() => console.log('ok'))
    .catch(() => console.log('caught rejected promise'));

// 2nd way to catch a rejection
Promise.reject()
    .then(
        res => {
            console.log("Not rejected");
        },
        err => {
            console.log("Rejected"); // Works like an else, but it can be passed as catch as well
        })/*.catch(data => console.log(data))*/;

// More
Promise.resolve()
    .then(
        res => {
            return Promise.reject("Rejected inner promise");
        },
        err => {
            console.log("Rejected"); // Works like an else, but it can be passed as catch as well
        }
    ).then(
        res => {
            console.log("Cool");
        },
        err => {
            console.log("2nd inner promise rejected");
        }
    ).catch(data => console.log(data));


function timeLogger(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time);
        if (typeof message !== "string" || typeof time !== "number") {
            reject("Incorrect input");
        }
    });
}

timeLogger("First", 1000)
    .then(message => {
        console.log(message)
        return timeLogger("Second", 800);
    }).then(message => {
        console.log(message);
        return timeLogger("Third", 100);
    }).then(message => {
        console.log(message);
        return timeLogger("Fourth", 300);
    }).then(message => console.log(message))
    .catch(err => console.log(err));


Promise.resolve("Hi")
    .then(string => {
        // Effectively same as saying return Promise.resolve(...)
        // Sync way
        /* return string + " there"; */
        // OR
        /*return new Promise((resolve, reject) => {
          resolve(string + " there");
        })*/
        // OR
        /*return Promise.resolve(string + " there");*/
        // Async way
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(string + " there, ");
            }, 1);
        });
    })
    .then(string => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(string + " Chris");
            }, 1);
        });
    })
    .then(string => {
        console.log(string);
    });

// Promise.all() holds untill all the promises get resolved
/*const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .then(data => console.log(data));*/


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("A");
    }, 750);
});
const p2 = Promise.resolve("B");
const p3 = Promise.reject("C");

Promise.all([p1, p2, p3])
    .then(data => console.log(data))
    .catch(err => console.log(err)); // If a rejection is returned it will be reflected in catch

// Promise.all() holds untill all the promises get resolved
const userName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ text: "billybillybob1234" })
    }, 750);
});
const position = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ text: "manager" });
    }, 300);
});

const employees = {

}

Promise.all([userName, position])
    .then(data => data.map(entry => entry.text))
    .then(content => employees[0] = content)
    .catch(err => console.log(err));

console.log(employees);

// Promise.race() as its name says, it fires as soon as one Promise gets resolved or rejected first
Promise.race([userName, position])
    .then(data => console.log(data.text));
