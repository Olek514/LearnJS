'use strict';

// Objects 5

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt("number?", 0);
//     }
// }

// let accumulator = new Accumulator(1); // початкове значення 1

// accumulator.read(); // додає введене користувачем значення
// accumulator.read(); // додає введене користувачем значення

// alert(accumulator.value); // показує суму цих значень

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b?", 0);
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     };
// };

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// Objects 4

// let calculator = {
//     read() {
//         this.a = +prompt("vvedit a", 0);
//         this.b = +prompt("vvedit b", 0);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// Objects 1

// let user = {};
// user.name = "Ivan";
// user.surname = "Smit";
// user.name = "Petro";
// delete user.name;

// function isEmpty(obj){
//     for (let key in obj){
//         return false;
//     }
    
//     return true;
// }

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "Вставай";
// alert( isEmpty(schedule) ); // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let key in salaries){
//     sum += salaries[key];
// }
// alert(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
// };
  
// multiplyNumeric(menu);

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if (typeof(obj[key]) == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// console.log(menu);