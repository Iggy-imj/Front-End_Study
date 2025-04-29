// Array
// JAVA - нумерованный, одного типа значения, фиксированная длина

const students = [];
console.log(students);

const teachers = ["Sergey", "Alisher", "Igor"];
console.log(teachers);

// еще один способ создать массив
const animals = new Array(); // пустой массив
const plants = new Array("Camomile", "Dandelion", "Basil");
console.log(plants);

// получить из массива элемент по индексу
const firstTeacher = teachers[0];
console.log(firstTeacher);

console.log(teachers[10]);

//
console.log(teachers.at(-2));

//
plants[3] = "Oak";

console.log(plants);

// элемент в конец массива
plants.push("Cactus");
console.log(plants);

// хочу перезаписать последний элемент
console.log(plants.length); // 5
plants[plants.length - 1] = "Rose";
console.log(plants);

const rose = plants.pop();
console.log(plants);
console.log(rose);

//

function createPersonalInfo(age, name, hairColor) {
  const personalInfo = new Array(age, name, hairColor);
  console.log(personalInfo);
}
createPersonalInfo(22, "Nik", "brown");

function createPersonalInfo(age, name, hairColor) {
  return [age, name, hairColor];
}
const info = createPersonalInfo(22, "Nik", "brown");
console.log(info);


// shift , unshift -  забирает/ добавляет элемент в начале

const cars = ["BMW"];
cars.unshift("Mercedes"); // добавили элемент в начало массива
console.log(cars);

const mercedes = cars.shift();
console.log(cars);

const cities = ["Berlin"];
const cities2 = cities;

cities.push("London");

console.log(cities2);

// копия массива не зависящая от первого
const newCities = [...cities]; // spread оператор

newCities.push("Hamburg");

console.log(cities);
console.log(newCities);

// массив из двх других
const array1 = ["a","b", "c"];
const array2 = ["e","f", "g"];

const alphabet = [...array1, ...array2];
console.log(alphabet);
