const prompt = require("prompt-sync")()
// String
let name = "Swanandi";
// Number
let age = 17;
// Boolean
let isStudent = true;
// Array
let subjects = ["HTML", "CSS", "JavaScript"];
// Object
let person = {
    name: "Swanandi",
    age: 17
};
console.log(name, age, isStudent, subjects, person);

//function greeting message
function greetUser(Name) {
    console.log(`Hello, ${Name}! Welcome.`);
}
let uname = prompt("Enter your name:");
greetUser(uname);

//function to calculate the sum of two numbers
function calculateSum(num1, num2) {
    console.log( num1 + num2);
}
calculateSum(5, 10); 

//function to calculate the subtraction of two numbers
function calculateSubtraction(num1, num2) {
    console.log( num1 - num2);
}
calculateSubtraction(10, 5);

//function for multiplicacion table using for loop
function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
table(5);

//even-odd check
let number = prompt("Enter a number to check if it's even or odd:");
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

//largest number among three numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number.");
} 
else if (num2 >= num3) {
    console.log(num2 + " is the largest number.");
} 
else {
    console.log(num3 + " is the largest number.");
}

//simple calculator using switch case
let operation = prompt("Enter the operation (+, -, *, /):");
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
switch (operation) {
    case "+":
        console.log(number1+" + " +number2+" = "+(parseFloat(number1) + parseFloat(number2)));
        break;
    case "-":
        console.log(number1+" - "+number2+" = "+(parseFloat(number1) - parseFloat(number2)));
        break;
    case "*":
        console.log(number1 + " * " + number2 + " = " + (parseFloat(number1) * parseFloat(number2)));
        break;
    case "/":
        console.log(number1+" / "+number2+" = "+(parseFloat(number1) / parseFloat(number2)));
        break;
    default:
        console.log("Invalid operation.");
}

//while loop example
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

//do while loop example
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);