/**
 *  ARROW FUNCTION -- allows you to write JS functions with a shorter, more concise syntax
 * 
 *  [ => ] -- used to define the function
 *  if you have one statement, omit the curly braces { } and return keyword
 *  if has multiple statements or requires return, you still need to put the { } and the return keyword
 * 
 *  if function has no parameters or has more than one parameter, you still need to include the parentheses ()
 *  if function has only one parameter, you can omit the  ( ) 
 */



/* Old way of making functions*/
function sayHello (name) {
    console.log("Hello" + name);;
}
sayHello("Princess");


/* New Way */
const greeting =() => console.log("Nice to meet you!");


// return keyword requires the { }



const sayHello =(name) => console.log("Hello" + name);
sayHello("Princess");


//Arrow function w/ 1 Parameters
const sqauer = num => num*num;
console.log(square(4));


//Arrow function w/ 2 or more Parameters
const sum = (a, b) => a+ b;

const intro = () => {
    let name = "Mary";
    let age = 25;
        return "Hi! My name is " + name + ". I am " + age + "years old.";
}


