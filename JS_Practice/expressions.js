// JS Expressions
// Arithmetic Expressions
let  result = 5 + 3 * 2;
console.log(result);
// [ + ] String concatenation operator
console.log("Hello " + "World");

let message = "Hello" + " " + "Alice!";
console.log(message);

console.log("--- Logical Expression ---");
let a=7;
let b=5;

console.log((a>5) && (b<10)); // ((7 > 5) && (5 < 10))

console.log("--- Assignemnt Expression ---");
let x = 10;
let y = 5;

x = x + y;  // Update the value of x by adding y
console.log(x);

console.log("--- Function Call Expression ---");
// Function Definition
function greet(name) {
    return "Hi! I am " + name + "!";
}

// Function Call
let intro = greet("Joseph");
console.log(intro);




