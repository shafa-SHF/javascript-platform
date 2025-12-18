//1. Swap the Values
//You have two variables:
//let x = 10;
//let y = 20;
//How can you swap the values of x and y using a third variable?
//After swapping: x should be 20, y should be 10.

let x =10;
let y =20;

let box= x;
x=y;
y=box;
console.log("after_swapping:")
console.log("x:",x)
console.log("y:",y)


//2.Simple Math with Variables
//let a = 8;
//let b = 3;
//Create a new variable sum to store the addition of a and b.
//Create a variable product for multiplication.
//Create a variable average for the average value of a and b.
let a = 8;
let b = 3;

let sum = a + b;
let product = a * b ;
let average = (a + b) /2 ;

console.log("simple maths with variable:");
console.log("sum:",sum);
console.log("product:",product);
console.log("average:",average);

//3.Temperature Conversion
//Store a Celsius temperature in a variable and create another variable to store the converted
//Fahrenheit, Reaumur and Kelvin value.
//Formula:
//R = 4/5 * C
//F = 9/5 * C + 32
//K = C + 273.15
//Example: If C = 25, then F = 77

let C = 25;
R = 4/5 * C ;
F = 9/5 * C + 32 ;
K = C + 273.15 ;

console.log("Temperature conversion:");
console.log("Celsius:",C);
console.log("Reaumur",R);
console.log("fahrenheit",F);
console.log("kelvin:",K);


// 4.Predict the Value
//What is the value of result after this code runs?
//let a = 5;
//let b = 2;
//let result = a + b * a;
//Explain why that’s the value (hint: operator precedence).

let a = 5;
let b = 2;
let result = a + b * a;
// answer:
// cz,in java script multiplication has higher precedence than adition.so, b*a is evaluated first.


//5. Combine Strings
//let firstName = "John";
//let lastName = "Doe";
//Create a new variable fullName that combines them into "John Doe".
//Critical thinking: What happens if you don’t put a space between them?

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);





//6. Guess the Output
//let x = 10;
//let y = x;
//x = 20;
//console.log(y);
//What will be printed, 10 or 20?
//Why?6. Guess the Output
//let x = 10;
//let y = x;
//x = 20;
//console.log(y);
//What will be printed, 10 or 20?
//10.
//Why?
//When we do let y = x;, the value of x (which is 10) is copied into y.
//  Later, when we change x to 20, it does not affect y 
// because numbers in JavaScript are primitive values 
// and are copied by value, not by reference(connection)