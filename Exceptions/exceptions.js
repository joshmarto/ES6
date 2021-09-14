function reverseJsonArray(value) {
    if (typeof value === "string") {
        try {
            let array = [];
            const jsonObj = JSON.parse(value);
            for (i in jsonObj) {
                array.push(jsonObj[i]);
            }
            for (i in jsonObj) {
                jsonObj[i] = array.pop();
            }
            return jsonObj;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    } else {
        throw "Entry is not a string";
        return false;
    }
}

const obj = '{"brand":"cool", "color":"blue", "design":true, "size":"medium", "useful":true, "year":2021}';
const arr = '["a", "b", "c"]';
let result = reverseJsonArray(obj);
console.log(result);
result = reverseJsonArray(arr);
console.log(result);
result = reverseJsonArray(123);
console.log(result);