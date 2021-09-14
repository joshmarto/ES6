/* In simple terms, the diference between var, let, and const is the fact of how they can be used
   in the scope. Var allows to use the variable out of the scope (which should not). let and const
   follow perfectly the scope in order to make sure the variables will not be access from a place
   in the could they should not be access from. let allows to use variables which are dynamic in
   terms of the content and its type. Const defines only constants, just like the name says these
   storage containers do not change the value which was provided initially. */
/* Hoisting: Is a way to refer about how work the context and execution of functions in ES6 */
var variable = "This is a variable";
console.log(variable);
variable = "Its value can change";
console.log(variable);
variable = 1001;
console.log(variable);

if (true) {
    let letExample = "This variable cannot be access out of the scope";
    console.log(letExample);
} else {
    let letExample = 404;
    console.log(letExample);
}

const constant = "This is a constant and cannot be modified at all";
console.log(constant);
