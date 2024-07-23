"use strict"

// Types 4

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // for each item of arr
//       partialSum += item; // add it to partialSum
//       maxSum = Math.max(maxSum, partialSum); // remember the maximum
//       if (partialSum < 0) partialSum = 0; // zero if negative
//     }
  
//     return maxSum;
//   }
  
//   alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
//   alert( getMaxSubSum([1, 2, 3]) ); // 6
//   alert( getMaxSubSum([-1, -2, -3]) ); // 0

// function sumInput(){
//     let numbers = [];

//     while (true){
//         let num = prompt("Vvedit chislo?");

//         if (num == null || num == '' || !isFinite(num)) break;
        
//         numbers.push(+num);
//     }

//     let sum = 0;
//     for(let num of numbers){
//         sum += num;
//     }

//     return sum;
// }

// alert(sumInput());

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // a,b,function(){...}

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.round(styles.length - 1) / 2] = "Classics";
// alert(styles.shift());
// styles.unshift("Rap", "Reggae")
// alert(styles);

// Types 3

// function extractCurrencyValue(str){
//     return +str.slice(1);
// }

// alert( extractCurrencyValue('$120') === 120 ); // true

// function truncate(str, maxlength){
//     return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }

// alert( truncate("Що я хотів би розповісти на цю тему:", 20));// == "Що я хотів би розпо…"

// alert( truncate("Всім привіт!", 20));// == "Всім привіт!"

// function checkSpam(str){
//     str = str.toUpperCase();
//     return str.includes('XXX') || str.includes('VIAGRA');
// }

// alert( checkSpam('buy ViAgRA now') == true);
// alert( checkSpam('free xxxxx') == true);
// alert( checkSpam("innocent rabbit") == false);

// function ucFirst(str){
//     return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("василь") );

// Types 2

// let first = +prompt("Перше число?", 0);
// let second = +prompt("Друге число?", 0);

// alert(first+second);

// function readNumber() {
//     let number;

//     while (true) {
//         number = prompt("Введіть число", 0);
//         if (number == "" || number === null) {
//             return null;
//         } else if (isFinite(number)) return +number;
//     }
// }

// alert(readNumber());

// function random(min, max){
//     return Math.random() * (max - min) + min; 
// }

// alert( random(7, 10) );

// function randomInteger(min, max){
//     return Math.trunc(min + Math.random() * (max + 1 - min));
// }

// alert( randomInteger(1, 5) );