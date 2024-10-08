//....................... varibales in js.............................

// var keyword
function exampleVar() {
    var message = "Hello";
    if (true) {
        var message = "Hello again";
        console.log(message, "inside if"); 
    }
    console.log(message, "outside if");     
}
exampleVar();

// let keyword
function exampleLet() {
    let message = "keyword var";
    if (true) {
        let message = "keyword variable";
        console.log(message, "inside if"); 
    }
    console.log(message, "outside if");     
}
exampleLet();

// const keyword
function exampleConst() {
    const message = "keyword const";
    if (true) {
        const message = "keyword variable";
        console.log(message, "inside if"); 
    }
    console.log(message, "outside if");     
}
exampleConst();

//........................ control flow statements in js...........................
//............. 1. Conditional statements...........
//if...else statement:
let age = 20;

if (age >= 18) {
    console.log("You are an adult."); // output
} else {
    console.log("You are a minor.");
}

// else if statement:
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // output
} else {
    console.log("Grade: C");
}

// switch statement:
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "apple":
        console.log("This is an apple."); // output
        break;
    default:
        console.log("Unknown fruit.");
}

// ................2. loops..............
// for loop:
for (let i = 0; i < 5; i++) {
    console.log(i, "for loop");  // Output: 0 1 2 3 4
}

// while loop:
let i = 0;
while (i < 5) {
    console.log(i, "while loop");  // Output: 0 1 2 3 4
    i++;
}

// do...while loop:
let a = 0;
do {
    console.log(a," do while loop");  // Output: 0 1 2 3 4
    a++;
} while (a < 5);

//...................3. Control Flow Modifiers............
// break
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;  // Exits the loop when i equals 3
    }
    console.log(i, "break loop");  // Output: 0 1 2
}

//continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;  // Skips the current iteration when i equals 3
    }
    console.log(i, "continue loop");  // Output: 0 1 2 4
}

//.................4. Function Calls..............
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Mendu"));  // Output: Hello, Mendu!

//...........5. Try...Catch (Exception Handling).........
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("This runs regardless of the outcome.");
}

// ternary operator
let num = 10;
let result = num >= 0 ? "Positive" : "Negative";
console.log(`The number is ${result}.`);

// Spread operator
let arr = [1, 2, 3];
console.log(...arr," spread operator");  // Output: 1 2 3

// Rest operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num);
}
console.log(sum(1, 2, 3, 4), "rest operator");  // Output: 10



//.................................Functions....................
// .........1.Function declaration
function add(a,b){
    console.log(a + b , "function declaration");
}
add(5,5); // 10

//..........2. function expression
const sub = function sub(a,b) {
    console.log(a - b , "function expression");
}
sub(5,1); // 4

//.................3. arrow functions
// Single line of code
let addArrow = (a, b) => a + b;
console.log(addArrow(3, 2), "arrow with single line");

// multiple line
let add1Arrow = (a,b) => {
    if(a>b){
        console.log("a is greater  in arrow fun"); // Output
    }else {
        console.log("b is greater");
    }
}
add1Arrow(5,3);

//Anonymouus Function
var greet = function () {
    console.log("Anonymous function!");
};
greet();


// ..........................Javascript scope.........................
// .................Local Variables/ Function scope

let global = "global var"

function myFunction() {
    let localVar = "Local Variable";
    if(localVar === "Local Variable"){
     console.log(localVar, "local varaiable inside if block"); 
     console.log(global,"global var");
     
    } else {
     console.log(localVar, "local varaiable inside else block"); 
    }

     console.log(localVar, "local varaiable inside function"); 
}

myFunction();
console.log(localVar,"local varaiable inside function"); // Error: localVar is not defined

// ...................Nested Function................
function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log(outerVar); // Output: "Outer"
        console.log(innerVar); // Output: "Inner"
    }

    innerFunction();
    console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();


// .......................Arrays..........................

let x = ["JavaScript", "React", "Angular"]; // Array Literal syntax

let y = new Array("apple", "banana", "cherry"); // Attay Constructor

// ...........................splice & slice..........................

// Declare and initialize array
let numArr = [20, 30, 40, 50, 60, 70, 80];

// Removing an adding element at a 
// particular location in an array

// Delete 3 elements starting from index 1
numArr.splice(1, 2);

// Insert 80, 90, 100 at starting index 1
// numArr.splice(1, 0, 3, 4, 5);

console.log(numArr, "numArr");


// // Declare and initialize array
// let strArr = ["amit", "sumit", "anil"];

// // Delete two elements starting from index 1
// // and add three elements.
// strArr.splice(1, 2, "Geeks", "Geeks1", "Geeks2");














