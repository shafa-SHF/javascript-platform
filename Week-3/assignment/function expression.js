//function expression
const add = function(a,b){
    return a+b;

};
console.log(add(5,3));

//difference between function and function declaration
// function declaration
function greet(){
    console .log ("hello");
}
greet();//hello

//function expression
const greet = function(){
    console.log("hello")
};
greet();


//why we use  function expression
setTimeout(function() {
  console.log("Runs later!");
}, 2000);


//short cut way to write function expression
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8



