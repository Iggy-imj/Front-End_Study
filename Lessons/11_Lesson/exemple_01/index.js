// tuple

const user = {
    email: "khamidov@gmail.com",
  };
  
  console.log(user.email);
  
  // Создайте метод который принимает массив и возврашает новый!
  // массив с теми же данными, но первый и последний элементы в массиве должны быть поменяны местами.
  
  // Исходный массив должен остаться неизмененным после вызова метода.
  
  const animals = ["panda", "tiger", "coala", "canguroo"];
  
  // const panda = animals[0];
  // const tiger = animals[1];
  
  const [panda, , coala] = animals;
  console.log(panda);
  console.log(coala);
  
  function swapFirstAndLast(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const swappedArr = [...arr];
    const temp = swappedArr[0]; // temporary
    swappedArr[0] = swappedArr[arr.length - 1];
    swappedArr[arr.length - 1] = temp;
  
    return swappedArr;
  }
  
  console.log(swapFirstAndLast(animals), "new array");
  console.log(animals, "initial array");
  
  // destructuring assignment of array
  const numbers = [1, 7, 3, 6, 5, 6];
  
  const [, seven] = numbers;
  console.log(seven);
  
  // destructuring assignment of object
  const admin = {
    email: "admin@gmail.com",
    age: 24,
    firstName: "Administrina",
    secondName: "Tiranikus",
  };
  
  // const email = admin.email; // старый
  
  const { age, secondName } = admin;
  console.log(age, secondName);
  
  const catPerson = {
    name: "Annamay",
    cats: ["Tom", "Garfield", "Barsik"],
  };
  
  console.log(catPerson);
  
  // const { cats } = catPerson;
  // console.log(cats);
  // const [, garfield] = cats;
  // console.log(garfield);
  
  const {
    cats: [, garfield],
  } = catPerson;
  console.log(garfield);
  
  const arr = [[1, 2, 3], ["Igor", "John", "Bob"], { isDrunk: true }];
  
  // 2, John, isDrunk
  // получить в отдельные переменные
  const [[, secondNumber], [, john], { isDrunk }] = arr;
  
  console.log(secondNumber, john, isDrunk);
  
  // Создайте метод который принимает массив строк, ничего!! не возвращает.
  // Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.
  
  // ["apple", "orange"] ---> ["Apple", "orange"]
  
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
  console.log(fruits);
  