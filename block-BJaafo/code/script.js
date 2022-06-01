// 1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.

function writeFunction(firstName = "", lastName = "") {
  return firstName + " " + lastName;
}

// 2. After writing the function write two tests for above function

let firstName = "Arya";
let lastName = "Snow";

let result = fullName(firstName, lastName);
let expected = "AryaSnow";

if (result !== expected) {
  throw new Error(`${result} is not same to ${expected}`);
}

firstName = "John";
lastName = "White";

result = fullName(firstName, lastName);
expected = "John White";

if (result !== expected) {
  throw new Error(`${result} is not same to ${expected}`);
}
// 3. Make the first test fail and look at the output
// 4. After making the first test fail do you see the output of the second test?
// >>>> No, not getting the output for the second test

// -------------------------------------------------------------------
// 1. Write a function that takes two input `amount` and `taxRate` and returns the total amount by `amount + (amount * taxRate) `

function totalAmount(amount = 0, taxRate = 0) {
  return amount + amount * taxRate;
}

// 2. Write two tests for the above function
let amount = 35000;
let taxRate = 1200;

result = totalAmount(amount, taxRate);
expected = 4203500;

if (result !== expected) {
  throw new Error(`${result} is not same to ${expected}`);
}

amount = 360;
taxRate = 25;

result = totalAmount(amount, taxRate);

expected = 9360;

if (result !== expected) {
  throw new Error(`${result} is not same to ${expected}`);
}

// 3. Make the first test fail and look at the output
// 4. After making the first test fail do you see the output of the second test?
// >>>> No, not getting the output for the second test
