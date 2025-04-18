console.log("Hello, Iggy!");

// 7 примитивных типов
// тип number // обьявили переменную и присвоили значение 6
let x = 6;
x = 10;
console.log(x);

let y = 12.5;
console.log(y);

x = y;
console.log(x);

x = "Ten";
console.log(x);

let name = "Iggy";

// Bigint для очень больших чисел
let z = 123254n;
console.log(z);

let message;
console.log(message);

// Тип null
let secondName = null;
console.log(secondName);

// boolean
let isMale = true;
console.log(isMale);

let isBigger = 10 > 4;
console.log(isBigger);

// константы
const m = 12;
// m = 13; - ошибка!

const COLOR_RED = "#f00";

// symbol
const symbol = Symbol("asd");
console.log(symbol);
// в качестве для уникальных ключей

// не примитив Object

const user = {
  email: "myemail@gmail.com",
};
console.log(user);

// Преобразование типов
// falsy values - те, которые преобразуются в false
// явное и неявное

// явное
// 10 -> "10"
let ten = 10;
let tenAsString = String(ten);
console.log(tenAsString);
console.log(typeof ten );
console.log(typeof tenAsString);
console.log(typeof tenAsString === "string");

// неявное
let elevenAsString = 11 + ""; // 11
console.log(elevenAsString);

// приведение к числу
// "11" -> 11
let eleven = Number(elevenAsString);
console.log(eleven);
console.log(typeof eleven);

let wrongNumber = Number("text text");
console.log(wrongNumber); // NaN
console.log(typeof NaN); // number

if(x < Infinity) {
    console.log("Bla");
}
console.log(typeof Infinity); // number

// преобразование в boolean
// явное
console.log(Boolean("Iggy")); // true
console.log(Boolean("12")); // true
console.log(Boolean("")); // false
console.log(Boolean(10)); // true
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false


// неявно в булеан
const myMoneyPoint = 12;
const myBrotherMoneyPoint = 0;

if(myMoneyPoint) {
    console.log("I am rich"); // выполнится
}

if(myBrotherMoneyPoint) {
    console.log("I am rich"); // не выполнится
}

let myUser = null;
if(myUser){
    console.log("User exist");
}

myUser = {email: "user@mail.com"}

if(myUser){
    console.log(myUser.email);
}

// Шаблонные строки

const myAge = 31;
const myName = "Iggy";

const text = `My name is ${myName}. I am ${myAge}`;
console.log(text);