// REST AND SPREAD
/*
 * Spread is useful to split arguments and arrays to use the contents on an individual way
 * which could be what expected insted of deal directly with the whole array.
 * Rest, by the other side works when we are dealing with methods or functions and objects
 * for properties and how the function can behave as intended.
 */

// Spread
const display = (...args) => {
    console.log(...args);
}
display("Back in the Day & So Good", "Live from the Inside", "Brian Culbertson", 2009, "Jazz", true,
    ["Spotify", "iCloud", "Youtube Music", "Deezer", "Play Music"], "Brian Culbertson", 4, 10);

// Rest
const myObj = {
    id: 1,
    name: 'The object',
    format(s, b, ...args) {
        let result = 0;
        for (const arg of args) {
            result += arg;
        }
        console.log(`${s.toUpperCase()} ${b} ${result}`);
    }
}
myObj.format("pirple", true, 5, 4, 3, 2, 1);