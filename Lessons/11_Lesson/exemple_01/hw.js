// destructuring assignment of array
const numbers = [1, 7, 3, 6, 5, 6];

const [, seven] = numbers;
console.log(seven);

const [, , , ff] = numbers;
console.log(ff);


//
const catPerson = {
  name: "Annamay",
  cats: ["Tom", "Garfield", "Barsik"],
};

console.log(catPerson);


//
const arr = [[1, 2, 3], ["Igor", "John", "Bob"], { isDrunk: true }];
// 2, John, isDrunk
// получить в отдельные переменные
const [[ , two], [ , john ], { isDrunk }] = arr;
console.log(two, john, isDrunk);

// task 2 

function capitalize(word) {
    if (word && word.length > 2) {
      return word.at(0).toUpperCase() + word.slice(1);
    } else {
      throw new Error("Invalid argument");
    }
  }
  
  function capitalizeFirstElement(arr) {
    if (arr.length) {
      arr[0] = capitalize(arr[0]);
    }
  }
  
  const fruits = ["asd", "asdasdsa"];
  capitalizeFirstElement(fruits);
  console.log(fruits)