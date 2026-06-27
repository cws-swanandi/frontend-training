const prompt = require('prompt-sync')();
// Arrays
console.log("Arrays in JavaScript");
let numbers = [5,3,6,2,8,1];
numbers.push(6);
console.log(numbers); 
numbers.pop();
console.log(numbers); 
numbers.shift();
console.log(numbers); 
numbers.unshift(0);
console.log(numbers);
let max=Math.max(...numbers);
console.log(max);
let min=Math.min(...numbers);
console.log(min);
const cars = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];
console.log(cars);
cars.sort();

//use of map()
console.log("Use of map()");
let sqNum = numbers.map(function(num){
    return num*num;
});
console.log(sqNum);

//use of filter()\
console.log("Use of filter()");
let evenNum = numbers.filter(function(num){
    return num%2==0;
});
console.log(evenNum);

//use forEach()
console.log("Use of forEach()");
numbers.forEach(function(num){
    console.log(num);
});
cars.forEach(function(car){
    console.log(car);
});

//Practice objects
console.log("Practice objects");
let student = {
    name: "Swanandi",
    age: 17,
    major: "Computer Science",
    gpa: 8.5
};

student.gpa = 9.0;
console.log(student.gpa);

for (let key in student) {
    console.log(key + ": " + student[key]);
}

//Implement ES6 features
console.log("Arrow functions");
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("Swanandi");

console.log("Template literals");
let message = `My name is ${student.name} and I am ${student.age} years old.`;
console.log(message);

console.log("Destructuring");
const { name, age } = student;
console.log(name);
console.log(age);

console.log("Spread operator");
const newNumbers = [...numbers, 9, 10];
console.log(newNumbers);
