for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// создать цикл который бы вывел в консоль числа от 100 до 0 через 2
// 100, 97

function count(startNum) {
  for (let i = startNum; i >= 0; i -= 3) {
    console.log(i);
    //   if (i === 1) {
    //     console.log(0);
    //   }
  }
}
count(12);

//
for (let i = 100, j = 5; i > j && j < 60; i--, j++) {
  console.log(i, j);
}

// while
let i = 100;
while (i > 0) {
  console.log(i);
  i--;
}

// 
const animals = ["panda", "wolf", "fox"];

// с помощью цикла while сделать так что бы в массиве все животные стали написаны капсом
// ["panda", "wolf", "fox"] --> ["PANDA", "WOLF", "FOX"]

let y = 0;
while(y < animals.length){
    animals[y] = animals[y].toUpperCase();
    y++;
}
console.log(animals);


// for ... of
for(let animal of animals) {
    console.log(animal);
}


