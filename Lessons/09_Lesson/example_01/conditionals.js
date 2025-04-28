// условный оператор
// if

let age = 1;

if (age > 21) {
  // если условие истинно - выполняется этот блок кода
  console.log("You can buy alcohol");
} else {
  // если ложно - то вот этот
  console.log("You can not buy alcohol");
}

if (age > 21) {
  // если условие истинно - выполняется этот блок кода
  console.log("You can buy alcohol");
} else if (age === 1) {
  // если ложно - то вот этот
  console.log("Milk is the best option for you");
} else {
  console.log("You can not buy alcohol");
}

// switch
const country = "UK";
switch (country) {
  case "UK":
    console.log("London");
    break;
  case "USA":
    console.log("Washington DC");
    break;
  default:
    console.log("Country is unknown");
}

age = 88;
switch (age) {
  case 1:
    console.log("Малыш");
    break;
  case 2:
    console.log("Ползунок");
    break;
  case 5:
    console.log("Дошкольник");
    break;
  case 16:
    console.log("Подросток");
    break;
  case 45:
    console.log("Зрелый");
    break;
  default:
    console.log("Отличный возраст");
}

console.log(12 - 3 + true + "12" + Boolean(NaN));

// Функции

function neighbor(time) {
  if (time > 0 && time < 8) {
    console.log("Drr-rr-drr");
    return "Drr-rr-drr";
  }
}

neighbor(2);

const result = neighbor(5);
console.log(result);
