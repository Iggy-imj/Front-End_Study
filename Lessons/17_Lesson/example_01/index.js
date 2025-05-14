const word = "1998-hjklw:John";

const regex = /[^0-9]/; // [^0-9] -  "не" цифры 0-9 - каретка внутри квадратных скобок - отрицание

const digit = /\d/; // одна цифра
const nonDigitVer2 = /\D/; // одна цифра

const letter = "9";

console.log(digit.test(letter));