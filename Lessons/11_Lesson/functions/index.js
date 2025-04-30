// call
sayHi();
// hoisting = поднятие
// когда вызов может быть раньше в коде, чем сама декларация функции

// functional declaration
function sayHi() {
  console.log("Hi!");
}

// Functional expression
const sayGoodbye = function () {
  console.log("Bye Bye");
};
sayGoodbye();

//
function butler(action) {
  action();
}

butler(sayHi);
butler(sayGoodbye);

// сосед
function neighbor(action, thing) {
  action(thing);
}

const party = function (track) {
  console.log("Tuc-tuc-tuc " + track);
};

const drill = function (item) {
  console.log("I drill " + item);
};

neighbor(party, "SOAD");
neighbor(drill, "wall");

// Пример Калькулятор
function calculator(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}

console.log(calculator(add, 9, 7));
console.log(calculator(divide, 12, 4));

// anonyms function - анонимная функция
// пример с вычитанием
const res = calculator(
  function (a, b) {
    return a - b;
  },
  9,
  4
);
console.log(res);

const res2 = calculator((a, b) => a - b, 9, 4);

// arrow function - стрелочная функция
// умножение
const multiply = (a, b) => a * b; // стрелочная функция без тела

const multiply2 = (a, b) => {
  // стрелочная функция с телом
  return a * b;
};

// стрелочная функция, которая передается в качестве параметра в другую функцию называется колбеком

// Возведение в степень
const power = (a, b) => a ** b;
console.log(calculator(power, 2, 3));

// pirate

function pirate(operation, item) {
    operation(item);
  }
  
  const drinkSmth = (a) => {
    console.log("I drink " + a);
  };
  
  const swim = (vehicle) => {
    console.log("I roam seas in my " + vehicle);
  };
  
  pirate(swim, "ship");
  pirate(drinkSmth, "rom");
  pirate(swim, "barrel");
  pirate(drinkSmth, "water");
