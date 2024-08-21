"use strict"
// Types 9

// function count(user){
//     return Object.values(user).length;
// }

// let user = {
//     name: 'Іван',
//     age: 30
// };

// alert( count(user) ); // 2

// function sumSalaries(salaries) {
//     let sum = 0;

//     for (let salary of Object.values(salaries)){
//         sum += salary;
//     }

//     return sum;
// } 

// let salaries = {
//     "Іван": 100,
//     "Петро": 300,
//     "Марія": 250
//   };
  
//   alert( sumSalaries(salaries) ); // 650

// Types 8

// let messages = [
//     {text: "Привіт", from: "Іван"},
//     {text: "Як справи?", from: "Іван"},
//     {text: "До зустрічі", from: "Аліса"}
//   ];

// let isMessageRead = new WeakSet();

// messages.forEach(el => isMessageRead.add(el));

// console.log(isMessageRead.has(messages[2]));
// messages.pop();
// console.log(isMessageRead.has(messages[2]));

// let messages = [
//     {text: "Привіт", from: "Іван"},
//     {text: "Як справи?", from: "Іван"},
//     {text: "До зустрічі", from: "Аліса"}
//   ];
  
//   let readMap = new WeakMap();
  
//   readMap.set(messages[0], new Date(2017, 1, 1));

// Types 7

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// // Помилка: keys.push -- це не функція
// keys.push("more");

// console.log(keys);

// function aclean(arr) {
//     let obj = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       obj[sorted] = arr[i];
//     }
  
//     return Object.values(obj);
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   alert( aclean(arr) );

// function getCharMap(word){
//     let charMap = new Map();
//     for (let char of word) {
//         char = char.toUpperCase();
//         if (!charMap.has(char)){
//             charMap.set(char, 0);
//         } else {
//             charMap.set(char, charMap.get(char) + 1);
//         }
//     }
//     return charMap;
// }

// function anagramsHas(anagrams, charMap){
//     for (let anagramCharMap of Array.from(anagrams.values())){
//         if(anagramsEqual(anagramCharMap, charMap)){
//             return true;
//         }
//     }

//     return false;
// }

// function anagramsEqual(anagramCharMap, charMap){
//     if (anagramCharMap.size != charMap.size){
//         return false;
//     }
//     for (let entry of charMap.entries()){
//         if (!(anagramCharMap.has(entry[0]) 
//             && anagramCharMap.get(entry[0]) == entry[1])){
//                 return false;
//         }
//     }

//     return true;
// }

// function aclean(words){
//     let anagrams = new Map();

//     for (let word of words) {
//         let charMap = getCharMap(word);
//         if (anagrams.size == 0 || !anagramsHas(anagrams, charMap)){
//             anagrams.set(word, charMap);
//         }
//     }
//     console.log(anagrams.keys());
//     return Array.from(anagrams.keys());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna", 
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare, Krishna, :-O

// let testMap = new Map();

// testMap.set('1', 'str1');
// testMap.set(1, 'str2');
// testMap.set(false, 'str3');

// console.log(testMap.get('1'));
// console.log(testMap.get(1));
// console.log(testMap.get(false));

// console.log(testMap.has(false));
// console.log(testMap.has(true));

// console.log(testMap.delete(false));
// console.log(testMap.delete(false));

// console.log(testMap.size);
// testMap.clear();
// console.log(testMap.size);

// let recipeMap = new Map([
//     ['огірок',   500],
//     ['помідори', 350],
//     ['цибуля',   50]
// ]);

// console.log(recipeMap.keys());
// console.log(recipeMap.values());
// console.log(recipeMap.entries());

// масив пар [ключ, значення]
// let map = new Map([
//     ['1',  'str1'],
//     [1,    'num1'],
//     [true, 'bool1']
//   ]);

// console.log(map);

// let obj = {
//     name: "Іван",
//     age: 30
//   };
  
// console.log(Object.entries(obj));
// console.log(Object.fromEntries(Object.entries(obj)) ===  obj);


// Types 6

// let range = {
//     from: 1,
//     to: 5
// };

// range[Symbol.iterator] = function (){
//     return {
//         cur: this.from,
//         last: this.to,
//         next: function (){
//             if (this.cur <= this.last) {
//                 return {done: false, value: this.cur++};
//             } else {
//                 return {done: true};
//             }
//         }
//     }
// }

// for (let num of range){
//     console.log(num);
// }

// let arr = Array.from(range);

// console.log(arr);

// let arr2 = Array.from(range, (x) => x * x );

// console.log(arr2);

// Types 5

// function groupById(arr) {
//     return arr.reduce((prev, cur) => {
//         prev[cur.id] = cur;
//         return prev;
//     }, {});
// }

// let users = [
//     {id: 'іван', name: "Іван Іванко", age: 20},
//     {id: 'ганна', name: "Ганна Іванко", age: 24},
//     {id: 'петро', name: "Петро Петренко", age: 31},
//   ];
  
//   let usersById = groupById(users);
  
//   console.log(usersById);
  
//   /*
//   // після виклику функції ви повинні отримати:
  
//   usersById = {
//     іван: {id: 'іван', name: "Іван Іванко", age: 20},
//     ганна: {id: 'ганна', name: "Ганна Іванко", age: 24},
//     петро: {id: 'петро', name: "Петро Петренко", age: 31},
//   }
//   */

// function unique(arr) {
//   let uniques = [];

//   for (let el of arr) {
//     if (!uniques.includes(el)) uniques.push(el);
//   }

//   return uniques;
// }

// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];

// alert( unique(strings) ); // Привіт, Світ, :-O

// function getAverageAge(users){
//     return users.reduce((sum, el) => sum + el.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function shuffle(array){
//     for (let i = 0; i < array.length; i++){
//         let a = Math.floor(Math.random() * array.length);
//         let b = Math.floor(Math.random() * array.length);
//         let x = array[a];
//         array[a] = array[b];
//         array[b] = x;
//     }
// }

// // підрахунок імовірностей для всіх можливих варіантів
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
  
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }
  
//   // показати кількість всіх можливих варіантів
//   for (let key in count) {
//     alert(`${key}: ${count[key]}`);
//   }

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // now: [ivan, mariya, petro]
// alert(arr[0].name); // Іван
// alert(arr[1].name); // Марія
// alert(arr[2].name); // Петро

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ ivan, petro, mariya ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));
// /*
// usersMapped = [
//   { fullName: "Іван Іванко", id: 1 },
//   { fullName: "Петро Петренко", id: 2 },
//   { fullName: "Марія Мрійко", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Іван Іванко

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ ivan, petro, mariya ];

// let names = users.map(item => item.name);

// alert( names ); // Іван, Петро, Марія

// function Calculator(){
//     let obj = {
//         methods : {
//             "+" : (a, b) => a + b,
//             "-" : (a, b) => a - b,
//         },
//         calculate(str){
//             let arr = str.split(" ");
//             let operator = arr[1];

//             if (operator in this.methods) {
//                 return this.methods[operator](+arr[0], +arr[2]);
//             } else {
//                 return 0;
//             }
//         },
//         addMethod(op, func){
//             this.methods[op] = func;
//         }
//     }

//     return obj;
// }

// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// alert( powerCalc.calculate("6 * 3") ); // 18
// alert( powerCalc.calculate("13 / 3") ); // 4.(3)
// alert( powerCalc.calculate("2 ** 10") ); // 1024

// function copySorted(arr){
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без змін)

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10

// function filterRangeInPlace(arr, a, b){
//     for (let i = 0; i < arr.length; i++){
//         if (a > arr[i] || arr[i] > b){
//             arr.splice(i,1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4

// alert( arr ); // [3, 1]

// function filterRange(arr, a, b){
//     return arr.filter(el => el >= a && el <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (відфільтровані значення)

// alert( arr ); // 5,3,8,1 (не змінюється)

// function camelize(str){
//     return str
//         .split("-")
//         .map((el, index) => index ? el[0].toUpperCase()+ el.substring(1) : el )
//         .join("");
// }

// alert(camelize("list-style-image"));

// let arrSplice = [1, 2, 3, 4, 5];

// arrSplice.splice(1, 0, 6, 7); // Вставити кілька елементів в масив.
// console.log(arrSplice);

// let arrSlice = arrSplice.slice(1, 3); // Отримання підмасиву
// console.log(arrSlice);

// arrSplice.splice(1, 2); // Видалити кілька елементів
// console.log(arrSplice);

// arrSplice.splice(-2, 2, 6, 7); // Замінити остані два елементи
// console.log(arrSplice);

// let arrConcat = arrSplice.concat(arrSlice); // Злиття масивів
// console.log(arrConcat);

// arrSlice.forEach(alert);

// console.log("Index of 5:", arrConcat.indexOf(5));
// console.log("Includes 5:", arrConcat.includes(5));

// console.log(arrConcat.find(el => el === 6));
// console.log(arrConcat.filter((el) => el / 2 > Math.floor(el / 2)));

// let arrMap = arrConcat.filter(el => (el / 2) > Math.floor(el / 2)).map(el => el + 1);
// console.log(arrMap);

// let arr = arrConcat.concat();
// arr.sort((a, b) => b - a);
// console.log(arrConcat);
// console.log(arr);
// console.log(arr.reverse());

// let arrSplit = "1, 2, 3, 4, 5, 6, 7, 8, 9".split(",");
// console.log(arrSplit);
// console.log(arrSplit.join(" -"));
// arr = arrSplit.map(el => +(el.trim()));
// console.log(arr);
// console.log(arr.reduce((sum, el) => sum += el));

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