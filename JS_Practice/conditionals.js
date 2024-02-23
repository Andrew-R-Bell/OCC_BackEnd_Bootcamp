/**
 * Conditional Statements -- allows us to make decisions in our code based on certain conditions. 
 */

//if statement --
if(age >= 18) {
    vote();
}

//if..else statement
if(age >= 18) {
    console.log("You can now vote.");
} else {
    console.log("You can't vote.");
}

//if..else..if..else
if(temp < 0) {
    console.log("It's freezing.");
} else if (temp >= 0 && temp < 20) {
    console.log("It is a cool day");
} else {
    console.log("It is a warm day");
}

/*
switch..case statement

3 keywords:
case: keyword for starting a case block
break: keyword for stopping the switch statement from running the next code.
default: keyword for running a code when there's no matching case found.
*/

let day="Monday"

switch(day) {
    case "Monday":
        console.log("It's Monday: Start of the week.");
        break;
    case "Friday":
        console.log("It's Friday: End of the week.");
        break;
    default:
        console.log("It's a regular day.");
        break;
  }

let num=7;
switch(num) {
    case 1:
        console.log("The number is one.");
        break;
    case 2:
        console.log("The number is two.");
        break;
        
        
    default:
        console.log("It's a regular day.");
        break;
  }
  