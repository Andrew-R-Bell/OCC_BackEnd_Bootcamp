/**
 * 
 * DESTRUCTURING -- simplifies extracting values for complex data structures; use it for cleaner and more readable code.
 * 
 * 
 */



//Destructuring from Arrays
let person = ["Alice", 30, "Software Engineer"];

/*/Traditional way of accessing each element
let name = person[0];
let age = person[1];
let job = person[2];

//New Way {destructuring
const [name, age, job ] = person;
console.log(person);
*/


//skipping elements
const [namee, , job ] = person;
console.log(namee, job);

const numbers = [1, 2, 3, 4, 5];
const[first, second, , fourth] = numbers;

console.log(first); //1
console.log(second); //1
console.log(fourth); //1


//Destructuring Objects
/**
 * JS Objects  -- can store various data types; used to represent a collection of key: value pairs
 */

//object literals
let person2 = {
    fname: 'Andy',
    age: 18,
    country: "Australia"
}

console.log(person2.fname);

//new way (Objext destructuring)
const {fname, age} = person2
console.log(fname);

//old way
const person3 = {
    name3: "Kasia",
    age3: 8,
    city: "Coorparoo"
}

const {name3, age3} = person3;
console.log(name3);
console.log(age3);

//--
const numberss = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3
}

const{firstNum, secondNum, thirdNum, fourthNum}= numberss;
console.log(fourthNum); //undefined
// Dwestructuring with Default VAlues
const user = {
    name: 'Bob'
};

const {age1 = 25} = user;
console.log(age1);

//Nested Objects
/*
let nestedObj = {
    first_name: 'Alice',
    age: 25,
    address: {
        city: 'Wonderland',
        country:'Fairyland'
    }
};

//destructure nested objects

//destructuring pattern should be defined before accessing the variables
const {first_name, age2, address} = nestedObj;

console.log(first_name);
console.log(address.city);
console.log(adress.country);
*/


//default values in nested destructuring
let nestedObj = {
    first_name: 'Alice',
    age: 25,
    address: {
        city: 'Wonderland',
        country:'Fairyland'
    }
};

const {first_name, age2, address : {city, country}, gender = 'Female' } = nestedObj;

console.log(nestedObj, gender);
console.log(gender);
console.log(city, country);



