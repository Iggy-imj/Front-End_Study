'use strict'

const x = 10;

let y, z;
y = 12; 

let b = 13;

console.log(b);

// OPERATORS

// Math
// +, -, *, /, %, **

let sum = 1 + 2;
console.log(sum);

let exmpl2 = "1" + 2;
console.log(exmpl2);

let exmpl3 = true + 4;
console.log(exmpl3);

let exmpl4 = "a" / 9;
console.log(exmpl4);

let exmpl5 = "9" - 5;
console.log(exmpl5);

let exmpl6 = 7 % 3;
console.log(exmpl6);

const myAge = 31;
const myAgeIsEven = myAge % 2 === 0;
console.log(myAgeIsEven);

const exmpl7 = 2 ** 3;
console.log(exmpl7);

// Logical
// || - или - хотя бы один операнд истина
// && - и - оба истины
// ! - отрицание

let exmpl8 = true && false; // false
let exmpl9 = true && false;

//====
let exmpl11 = !!5; // true
let exmpl12 = !!0; // false
console.log(exmpl11);
let exmpl13 = Boolean(5);
console.log(exmpl13);

// 
const myName = undefined;
const defaultName = "John";

const result = myName || defaultName;
console.log(result);

const userAge = undefined;

const age = userAge || 18; // если userAge не указан то age будет равен 18

// Операторы сравнения
// >, <, >=, <=
console.log(6 > NaN); // false

// Равенство
// == - не строгое 
// === - строгое
console.log("5" == 5); // true
console.log("5" === 5); // false

console.log("Hello" === true); // false
console.log("Hello" == true); // false "Hello" --> NaN - преобразует в число

console.log("9" == 9); // true
console.log(("9"+3) == 12 ); // "9" + 3 --> "93" --> 93 --> 93 === 12 --> false

// исключение
console.log(undefined == null); // true



