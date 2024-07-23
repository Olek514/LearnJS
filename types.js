"use strict"

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