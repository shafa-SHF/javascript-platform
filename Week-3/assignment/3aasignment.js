//1.Print Numbers
//Write a program that prints numbers from 1 to 10 using a for loop.
//Expected Output: 1 2 3 4 5 6 7 8 9 10
for(let i=1;i<=1;i++){
    console.log(i);
}


//2.Even or Odd Checker
//Ask the user for a number and check whether it is even or odd using an if...else.
let num=prompt("enter a number:");
num=Number(num);

if(num % 2 ===0) {
    console.log("the number is even.");
} else{
    console.log("the number is odd.");
}



//3.Simple Calculator (Addition)
//Create a program that takes two numbers from the user and displays their sum.
let num1=prompt("enter first number:");
let num2=prompt("enter second number:");

num1=Number(num1);
num2=Number(num2);

let sum = num1 + num2 ;
console.log("the sum is:",sum);



//4.Grade Checker
//Write a program that accepts a student’s score and outputs their grade:
//  90–100 = A
// 80–89 = B
// 70–79 = C
// Below 70 = Fail
let score=prompt("enter your score:");
score=number(score);

if(score >=90 && score<=100){
    console.log("Grade:A");
}else if (score>=80  && score<=89){
    console.log("Grade :B");
}else if (score>=70 && score<=79) {
    console.log("Grade : C ") ;
}else if (score <=70 ) {
    console.log("Grade : Fail ");
}else {
    console.log("Invalid score entered");
}



//5.Multiplication Table Generator
//Ask the user for a number and print its multiplication table (e.g., 5 × 1 ... 5 × 10).
let _num = prompt ("Enter a number:");
_num = Number(_num);

console.log (`multiplication table of ${num}`)
for (let i=1 ; i<=10 ; i++) {
    console.log(`${num} x ${i} = $ {num * i}`);
}



//6.Array of Fruits
//Create an array of fruits. Display each fruit using a loop.
let Fruits =["Apple","Banana","Mango","Orange","Pine apple"];
console.log("List of fruits:");

for ( let i=0;i< Fruits.length;i++) {
    console.log (Fruits[i]);
}



//7.Find the Largest Number
//Write a program that finds the largest number in an array [12, 5, 20, 25, 7].
let numbers = [12,5,20,25,7];
let largest =numbers[0];
 for ( let i =1;i<numbers.length; i++){
    if(numbers[i]>largest){
        largest = numbers [i];
    }
 }
 console.log("The largest number is:",largest);



 //8.Reverse a String
//Ask the user for a word and print it reversed.
//Example: "Hello" → "olleH"
let word =prompt("Enter a word:");
let reversed = "" ;

for ( let i = word.length - 1 ; i >=0 ; i--){
    reversed += word [i];
}
console.log("Reversed word:",reversed);



//9.Prime Number Checker
//Ask the user for a number and check if it is prime or not.
let num_ =prompt("Enter a number:");
num_= Number(num);
let isPrime= true;

if (num <= 1) {
    isPrime = false;
} else {
    for(let i=2; i<=math.sqrt(num); i++){
        if(num % i === 0 ){
            isPrime = false;
            break
        }
    }
}
if(isPrime){
    console.log(num + "s a prime number.");
}else{
    console.log(num + "is no a prime number");
}


//10.Array Filtering (Adults Only)
//From the array [12, 18, 25, 30, 15], filter only the ages 18 or above.
let ages=[12,18,25,30,15];
let adults =[];
for (let i = 0;i<ages.length;i++){
    if(ages[i]>=18) {
        adults.push(age[i]);
    }
}
console.log("Ages 18 or above :", adults);