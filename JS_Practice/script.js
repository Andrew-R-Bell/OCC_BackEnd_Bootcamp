// JavaScript Types....
// Primitives:
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"
// undefined : typeof instance === "undefined"


// Structural Types:
// Object : typeof instance === "object"
// Function : typeof instance === "function"

// Variables

const my_name="Andy";
let my_age=23;

console.log(my_name);
console.log(my_age);

/*
Multi line
Comment
*?

//=== Data Types ===//

/* Primitive Data Types - most basic data type in JS */

//Number

const my_num =23;
let my_num2=90.8;
console.log("This is a number: ", my_num,my_num2);


//String
let first_name = "JAne";
console.log("This is a string: ", first_name);

//Boolean = True or False
let isStudent = true;
console.log("This is a Boolean: ", isStudent);

//Undefined -- uinitialized or missing value
let myUndefinedVar;
console.log(myUndefinedVar);

//Null -- empty ; intentional absence
const myNull = Null;
console.log(myNull);

/**
 * * Reference Data Type -- holds more complex data types
 */

//Objexct -- represents a collection of key value pairs enclosed in {}
let person = {
    name: "Jon",
    age: 30,
    city: "New York",
    };

    console.log(person);

    //Array -- represents an ordered list of values enclosed in [ ]
    let numbers = [1,2,3,4];

    console.log(numbers);

//Function - represents reusable block of codes that can be invoked by name
function greet(name) {
    console.log("Hello" + name);
}

greet("Alice");

//dATE
const today=new Date();
console.log(today);
