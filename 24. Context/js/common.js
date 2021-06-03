// Example 1

// this=window

// let user = {
//   firstName: "Adam",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// setTimeout(user.sayHi, 1000); 

// Example 2

// let user = {
//   firstName: "Adam",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// setTimeout(function() {
//   user.sayHi();
// }, 1000);

// Example 3

// let user = {
//   firstName: "Adam",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// setTimeout(() => user.sayHi(), 1000);

// // ... 1 sec
// user = { sayHi() { console.log("Another user in 'setTimeout'!"); } };

// Example 4

// this=context

// let user = {
//   firstName: "Adam"
// };

// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser(); 

// Example 5

// let user = {
//   firstName: "Adam",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// let sayHi = user.sayHi.bind(user); // (*)

// sayHi();

// setTimeout(sayHi, 1000); 


