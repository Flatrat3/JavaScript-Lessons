//- Declare 2 number type variable  and assign value, then show output on the console

let number = 5;
console.log(number);

let number1 = 6;
console.log(number);

// Declare 3 string type variable and show result as alert message

/* 
let firstStringAlert = alert(" Hello");
let secondStringAlert = alert("This is ChatGpt");
let thirdStringAlert = alert(
  "If you have any questions do not hesitate to ask"
);*/

//Declare 4 variable and assign different type of datas, show all types on the console

let stringData = "Asim";
let age = 28;
let isMarried = false;
let array = ["banana", "apple", "pea"];

console.log(typeof stringData, typeof age, typeof isMarried, typeof array);

//Declare 2 variable and show the multiple result on the console

let num1 = 10;
let num2 = 20;

console.log(num1 * num2);
console.log(num1 + num2);
console.log(num2 - num1);

// You have 2 variable, first is number type second is string type.Show the type which is sum of these variables

let numType = 5;
let stringType = "5";
console.log(numType + stringType); //ouput 55
console.log(typeof (numType + stringType)); //ouput string

// Create a variable, named y, assigning the value 50 to it

let y = 50;

// Create a variable, named fruitName, assigning the value Orange to it.

let fruitName = orange;

//Show the sum of 3+10, applying the following two variables: x and y.

const x1 = 3;
let y1 = 10;
let z = x1 + y1;

console.log(z);

//On a single line, declare three variables with the given names and values: firstName = "David" lastName = "Johnson" age = 41

let firstName = "Asim",
  lastName = "Ehmed",
  age1 = 28;

//  Multiply 5 with 7, alerting the result.

/*var result = 5 * 7;
alert(result);*/

let remainder = 13 % 7;

// Display the remainder in an alert message
alert(`The remainder of 13 divided by 7 is ${remainder}`);

//Apply the right assignment operator, which will result in x being 20 (the same as x = x + y).

let x = 10;
let a = 10;
x += a;

console.log(x); // output 20;

let x2 = 20;
let a1 = 10;
x2 += a1;

console.log(x2); // output 30

// Declare variables with values of different data types
let num = 42;
let str = "Hello, world!";
let bool = true;
let nul = null;
let und = undefined;
let obj = { name: "John", age: 30 };
let arr = [1, 2, 3];

// Output values and types on the console
console.log(num, typeof num); // Output: 42 "number"
console.log(str, typeof str); // Output: "Hello, world!" "string"
console.log(bool, typeof bool); // Output: true "boolean"
console.log(nul, typeof nul); // Output: null "object"
console.log(und, typeof und); // Output: undefined "undefined"
console.log(obj, typeof obj); // Output: { name: "John", age: 30 } "object"
console.log(arr, typeof arr); // Output: [1, 2, 3] "object"
