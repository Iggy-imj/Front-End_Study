const house = {
    adress: "Pfondorfer str 69",
    postIndex: 10408,
    roofColor: "red",
    wallColor: "green",
  };
  
  const { adress, roofColor } = house; // destructuring assignment
  
  console.log(adress, roofColor);
  
  // Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix.
  // Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.
  
  // Исходный массив должен остаться неизменным.
  
  // Пример:
  // ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]
  
  const arr = ["apple", "orange"];
  
  function mutate(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = "pickle";
    }
  }
  
  mutate(arr);
  
  console.log(arr);
  
  // side effect
  let x = 10;
  
  function getHello() {
    x += 2;
    return "Hello!";
  }
  
  console.log(getHello());
  console.log(getHello());
  
  console.log(x);
  
  function addPrefix(arr, prefix) {
    const prefixedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      prefixedArr[i] = prefix + arr[i];
    }
  
    return prefixedArr;
  }
  
  const saltedPickes = addPrefix(arr, "salted");
  console.log(arr); // [ 'pickle', 'pickle' ]
  console.log(saltedPickes); // [ 'saltedpickle', 'saltedpickle' ]
  
  // Создайте функцию gardender, которая принимает в себя два параметра:
  // операцию и предмет, на который эта операция будет направлена.
  
  // Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.
  
  // Вызовите фунцкию gardender c параметрами: функция поливать цветок, 'rose'.
  
  // Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 🧑‍🌾
  
  function gardender(operation, item) {
    operation(item);
  }
  
  let y = 10;
  
  // hoisting // learn javascript
  function water(plant) { 
    console.log(`I water this ` + plant);
  }
  
  gardender(water, "rose");
  
  gardender((plant)=>{console.log(`I dig this `+ plant);}, "nettle");  // callback
  
  
  