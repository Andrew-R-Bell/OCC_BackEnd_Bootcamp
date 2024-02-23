//JS Operators
/*
Arithmetic Operators
(+) (-) (*) (/)
*/

let num1=21;
let num2=10;

//Addition
let sum= num1+num2;
console.log("Sum is: ",sum)

//Subtraction
let sub= num1-num2;
console.log("Difference is: ",sub);

//Multiplication
let product= num1*num2;
console.log("Product is: ",product);

//Division
let quotient= num1/num2;
console.log("Quotient is: ",quotient);

//Modulo
let modulo= num1 % num2;
console.log("Remainder is: ",modulo);

/**
* Assignment Operator
*/


//Equals ( = )
let equals = "this value";

// Addition Assignment ( += )
let a=5;
a += 5; // a = a + 5
console.log(a);

// Subtraction Assignment ( -= )
let s=5;
s -= 5; // a = a - 5
console.log(s);

// Multiplication Assignment ( *= )
let m = 5;
m *= 5;
console.log(m);

//Division Assignment ( /= )
d = 5; 
d /= 5;
console.log(d);

/**
//Comparison operators -- returns Boolean values (true or false)

Greater than ( > )
Less than ( < )
Less than or equal to ( <= )
Greater than or equal to ( >= )
Equal to ( == ) -->  loose equality; checks id it has the same value; disregards date type
Strict Equal to( === ) --> Checks not just the value, but also thee data type
Not Equal to ( != )
*/

console.log(9>10);
console.log(10<20);
console.log(15<=30);
console.log(20>=50);
console.log("5"==5);
console.log("5"===5);
console.log(9!=20);

/**
 * Logical Operators -- Combine Boolean values and logical operators to evaluate conditions
 * 
 * AND (&&) , OR ( || ), NOT ( ! )
 */

//AND (&&) both conditions should be true to return true
console.log("AND (&&): ", true && true);

//OR ( || ) -- returns trrue if at least one of the conditions on its left or right is true.
console.log("OR (||): ", false || true);

//NOT ( ! ) -- reverses the boolean value.
console.log("NOT (!): ", !true);

/**
 * * Unary Operators
 Increment (++) , decrement ( -- )
 */

let x=10;
x++; // x + 1
console.log(x); //11

x--; //x - 1 => 11 - 1
console.log(x); // 10

/**
 Ternery Operator --> simple conditional statement i a single line; takes 3 operands and returns a value based on a condition.
 
condition ? expression if true : expression if false 
  */
let age =20;

let message=(age>=18)?"You are of legal age": "You are a minor";
console.log(message);

console.log(typeof first_name);
console.log(typeof isStudent);
console.log(typeof my_null);
console.log(typeof myUndefinedVar);


