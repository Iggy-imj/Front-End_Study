// Regular expressions
// RegExp

// найти фрагмент строки, подходящий под описание
// можем все вхождения заменить на другую строку
// посмотреть/проверить соответствует ли строка шаблону - валидации

const text1 = 
"Hello, Alisher! oh, Anna, you are also here, well hello there!";

console.log(text1.match(/Hello/));

console.log(text1.replace(/Hello/, "Good day")); // Good day, Alisher! ....

// Что такое флаги? i , g
const text2 = "Apple Orange apple orange Apple Orange apple orange";
console.log(text2.replace(/apple/, "banana")); // без флага заменяется только первое вхождение
console.log(text2.replace(/apple/g, "banana")); // с флагом "g" заменили все с учетом регистра
console.log(text2.replace(/apple/ig, "banana")); // с флагом "i" игнорирует регистр

// хочу проверить что выражение состоит из буквы и нескольких чисел

// a87
// b675
// c99

// x88y - no
const code = "Cakea87";

console.log(code.match(/.87/)); // точка соответствует любому символу -  мета-символ для чего угодно

// проверим начинается ли выражение со слова Cake
console.log(code.match(/^Cake/)); // каретка " ^ " обозначает начало строки

const example = "Hello, John!";
console.log(example.match(/^John/)); // null - в начале строки, нету указанного выражения

// мы можем проверить находится ли слово в конце строки?
// для этого есть символ " $ "
console.log(example.match(/John!$/)); // конец строки

// Хочу проверить, что выражение их четырех символов начиналось на t и заканчивалось на 8
const example2 = "tuh8"; // проходит
const example3 = "tuh9"; // не проходит
console.log(example2.match(/^t..8$/)); // [ 'tuh8', index: 0, input: 'tuh8', groups: undefined ]
console.log(example3.match(/^t..8$/)); // null

// найти точку как знак препинания
// aaa.aaa.aaa
const example4 = "aaa.aaa.aaa";
console.log(example4.match(/aaa\.aaa\.aaa/)); // экранировать точку с помощью обратного слеша "\" и так же с другими символами, например: " $, ^ ..."

// Как обозначить буквенные символы 
// Хочу, чтоб слова начиналось с букв h, l или b ?
// hate, late, bate, - ok
// waite -  not ok

const example5 = "hate";
console.log(example5.match(/[hlb]ate/)); // любая из трех пойдет в качестве первого символа
console.log("waite".match(/[hlb]ate/));  // null

// слово должно начинаться на букву "F" дальше на втором месте должна быть буква "а" или цифра "6"
// на 3-м месте любой символ
// слово заканчивается буквой в нижнем регистре
const word = "F6mv"; // ok
console.log(word.match(/^F[a6].[a-z]$/)); // ok

// [A-Za-z] все буквы
// [A-Za-z0-9] все буквы и цифры

// + * ?