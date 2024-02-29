//* JS Activity - Maths*/


let message ="<h2>Input your 2 numbers to be forged together and the operand</h2>";
document.write(message);

let my_num1 = Number(prompt("Enter First Number"))
let my_num2 = Number(prompt("Enter Second Number"))
let operand = (prompt("Enter Operand"))

console.log(calculate(my_num1, my_num2, operand));

function calculate(num1, num2, operator) {
    switch(operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = ("Well that didn't work...");
    }
    return result;
}

document.write("<h2>Your Answer is: </h2>",result);

