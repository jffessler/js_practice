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