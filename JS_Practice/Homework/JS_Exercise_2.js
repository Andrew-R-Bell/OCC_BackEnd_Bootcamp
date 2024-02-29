// OCC Backend Bootcam JS Homework

// OCC Backend Bootcam JS Homework

// ==Exercise 1 - Function Expression==

let my_num1 = Number(prompt("Enter First Number to be Added"))
let my_num2 = Number(prompt("Enter Second Number to be Added"))

function add(num1, num2) {
    return num1 + num2;
};

let sum=add(my_num1,my_num2);
console.log(sum);
document.write("The Addition is: ",sum);
document.write("<br>",);
document.write("<br>",);

// ==Exercise 2 - Find Max==

let Ar1 = Number(prompt("Enter 1st Number of a 5 number Array"));
let Ar2 = Number(prompt("Enter 2nd Number of a 5 number Array"));
let Ar3 = Number(prompt("Enter 3rd Number of a 5 number Array"));
let Ar4 = Number(prompt("Enter 4th Number of a 5 number Array"));
let Ar5 = Number(prompt("Enter 5th Number of a 5 number Array"));

let myArray = [Ar1, Ar2, Ar3, Ar4, Ar5];

function max(numArray) {
    return Math.max.apply(null, numArray);
};

let maximum = max(myArray);
console.log(maximum);
document.write("The Maximum Value is ",maximum);
document.write("<br>",);
document.write("<br>",);


//==EXERCISE 3: Higher Order Function

function mathOperation(num1, num2, callback){
    callback(num1, num2);
}

function addition(num1, num2){
    console.log( num1 + num2)
}

function subtraction(num1, num2){
    console.log( num1 - num2)
}

function multiplication(num1, num2){
    console.log( num1 * num2)
}

function division(num1, num2){
    if (num2 == 0){
        console.log("You cannot divide by zero");
    } else {
        console.log( num1 / num2)
    }
}

mathOperation(6, 8, multiplication);
mathOperation(6, 3, division);
mathOperation(10, 13, addition);
mathOperation(5, 18, subtraction);


//EXERCISE 4: Function as a Parameter

function applyFunction(otherFunction, anArray){
console.log(otherFunction(anArray));
}

function spliceFunction(otherArray){
    splicedArray = otherArray.splice(1,otherArray.length-1)
    return splicedArray
}

bltArray = ["bread", "bacon", "lettuce", "tomato", "butter"];

applyFunction(spliceFunction, bltArray);



//EXERCISE 5: Callback Functions

function UserData(callbackFunction) {
    return callbackFunction(); 
}

let firstName = "John";
let lastName = "Wick";

function fullName() {
    return firstName + " " + lastName;
}

console.log(UserData(fullName));