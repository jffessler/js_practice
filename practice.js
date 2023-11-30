// console.log("Hello, World!")
// console.log("Test")

// Rules for creating variables
// 1: the name should be unique
// 2: name should not be any reserved keyword
// 3: must start with a character, _, or $

// creating a variable using the let keyword and reassigning the variable value
// let variableName = "Welcome to Variables!!";
// variableName = "Hello!";
// console.log(variableName);

// // creating a variable using the const keyword
// const variableName1 = "you are not welcome!";
// console.log(variableName1);

// // creating a variable using the var keyword
// var name = "John";
// console.log(name);

// Single line comment 
// anything folling a '//' is a single line comment

// Multiline comment below
/*
Anything between
these characters is a multi-line comment that will be ignored by the Javascript interpreter. 
*/

/////////////DATATYPES

///////////// Strings
// const singleQuotes = 'hello';
// console.log(singleQuotes);
// const doulbeQuotes = "hello!";
// console.log(doulbeQuotes);
// const namer = 'Jane';
// const backticks = `hello, ${namer}!!`;
// console.log(backticks);
// // backticks create a dynamic data string, where you can add strings and even do operations
// const operation = `${2+2}`
// console.log(operation)
// console.log(typeof operation)

///////////// Numbers
// const wholeNumber = 5;
// const decimalNumber = 0.5;

// console.log(wholeNumber,decimalNumber);
// const firstNumber = 5;
// const secondNumber = 10;
// const result = firstNumber + secondNumber;
// console.log(result);

/////////////Booleans
// const isCool = false;
// // console.log(typeof isCool);
// if(isCool){
//     console.log("Hey, you're cool!");
// } else {
//     console.log("Oh, Hi..");
// }
// const age = 20;
// console.log(age>=20);

/////////////Null and Undefined
// a built in bug is -> type of 'null' is object 
// technically should be null since it is a basic data type but many old code bases rely on the
// the fact that it is type "object"
// let age = null;
// // age = 20;
// console.log(age);

// let x;
// console.log(x);

///////////// Objects
// const namer = 'John';
// const age = 25;

// const person = {
//     name: "John", 
//     age: 25,
// };


// // dot notation
// console.log(person.name)

///////////// Arrays 

// const arr = [1,2,3,4];

// ////// object continued, arrays are also objects

// const date = new Date();
// console.log(date);

// console.log(typeof arr);
// // console.log(typeof person);
// console.log(typeof date);

///////// Statically Typed Languages
///////// Dynamically Typed Languages


// javascript is dynamically typed meaning that variables can have their type changed, i.e. number to string

////////
// Comparison operators => return true/false

// const a = 10;
// const b = 10;
// // greater than, greater than or equal to, less than , less than or equal, equal, and not equal
// // console.log(a==b);
// // console.log(a != b);

// // strict equality
// console.log(a === b);
// // strict inequality
// console.log(a !== b);

// console.log(5 == '5');
// console.log(5 === '5')

// strict equality compares both VALUES and DATA TYPES
// it only returns true if both are strictly the same

// Loose equality: it doesn't compare data types!!
// console.log(20 == "20") returns true

// Generally NEVER use loose equality
// good ones: === and !==
// bad ones


// The dangers of using loose equality and examples
// console.log('' == '0') // false
// console.log(0 == '') // true
// console.log(0 == '0') // true

// console.log(false == 'false') // false
// console.log(false == '0') // true

///////////// Logical Operators
// or || at least ONE of the opperands are true then return True
// console.log(true || false);
// and && -> All operands are true and then returns True
// console.log(true && true && true);
// not !
// console.log(!true);


/////////// If statement
// const age = 1;

// if (age > 18) {
//     console.log("You may enter!");
// } else if (age === 18){
//     console.log("You turned 18, Welcome!");
// } else {
//     console.log("Grow Up!");
// }

/////////// While loop

// let i = 0;
// while (i < 10){
//     console.log(i);
//     i ++;
// }

/////////// For loops
// for([initialization]); [condition]; [final-espression]{
// }

// for(let i = 0;i < 10;i++){
//     console.log(i);
// }

/////////// Functions

// function declaration (where the function is defined)
// function squared(number) {
//     return number*number;
// }
// // function call (where a function is executed)

// const result = squared(5);
// console.log(result);

// // function declaration

// function names(params){
//     // statements on there womens clothes
//     // have access to THIS keyword
// }
// // function expression
// const name = names(params) {
//     // statements
// }

// // arrow functions
// const name = names(params) => {
//     //statement
// }

// function sayhi(name){
//     console.log(`Hi, ${name}`)

// }
// sayhi("Joe")

// functions continued

// function add(a,b){
//     // return "Returned!";
//     return a + b;
// }
// const sum = add(2,2);
// console.log(sum);

// function test() {
//     return true;
//     // return false;
// }

// const bool = test();
// console.log(bool);

// arrow functions!
// const square1 = (number) => {
//     return number*number;
// }
// const square = (number) => number*number;

// const result = square(5);
// console.log(result)
// const result1 = square1(5)
// console.log(result1)