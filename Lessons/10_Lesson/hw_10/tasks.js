// task_01

function swapFirstLast(array) {
  const newArray = [...array];

  newArray[0] = array[array.length - 1];
  newArray[newArray.length - 1] = array[0];

  return newArray;
}

const original = [1, 2, 3, 4];
const modified = swapFirstLast(original);

console.log("original: ", original);
console.log("modified: ", modified);

console.log("\n=============\n");

// task_2

function capitalizeFirstElement(array) {
    array[0] = array[0].at(0).toUpperCase() + array[0].slice(1); 
}

const fruits = ["apple", "orange"];
capitalizeFirstElement(fruits);
console.log(fruits);
