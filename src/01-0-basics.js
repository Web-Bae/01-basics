/**
 * Task 1: String Manipulation
 */

// 1. Define three string variables firstName, middleName, and lastName.
var firstName = "Jeff";
var middleName = "Keegan";
var lastName = "Leary";

// 2. Declare a function named logFullName that takes no arguments.
function logFullName() {
    var fullName = `${firstName} ${middleName} ${lastName}`;
    console.log(fullName);
}

/**
 * Task 2: Data Types
 */

// 1. Declare a variable named age and assign it a number.
var age = 29;
// 2. Declare a variable named isStudent and assign it a boolean value.
var isStudent = true;
// 3. Declare a variable named courses and assign it an array containing three string values representing courses e.g. "Math", "Science", "History".
var courses = ["Math", "Science", "History"];

// 4. Declare a function named logVariableTypes that takes no arguments.
function logVariableTypes() {
    // 5. Print the type of each variable using the typeof operator.
    console.log(typeof age);
    console.log(typeof isStudent);
    console.log(typeof courses);
}

/**
 * Task 3: Variables Declaration
 */

// 1. Using var, declare a variable named school and assign it a value of "Hogwarts".
var school = "Hogwarts";
// 2. Using let, declare a variable named subject and assign it a value of "Potions".
let subject = "Potions";
// 3. Using const, declare a variable named professor and assign it a value of "Snape".
const professor = "Snape";

/**
 * Task 4: Basic Operators
 */

// 1. Declare two variables x and y with values 5 and 10 respectively.
const x = 5;
const y = 10;

function logAddition() {
    // 2. Log the sum of x and y.
    const sum = x + y;
    console.log(sum);
}
function logSubtraction() {
    // 3. Log the x subtracted from y
    const subtract = y - x;
    console.log(subtract);
}

function logMultiplication() {
    // 4. Log the product of x and y.
    const product = x * y;
    console.log(product);
}

function logDivision() {
    // 5. Log the quotient when x is divided by y.
    const quotient = x / y;
    console.log(quotient);
}

/**
 * Task 5: Operator Precedence
 */

// 1. Evaluate the following expression without using a calculator or running the code: 3 + 4 * 5.
let result1 = 3 + 4 * 5;

// 2. Now, evaluate this: (3 + 4) * 5.
let result2 = (3 + 4) * 5;

function logResults() {
    // 3. Log both result values in your JavaScript environment and check your answers.
    console.log(result1);
    console.log(result2);
}
