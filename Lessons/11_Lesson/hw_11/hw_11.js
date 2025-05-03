// Task_01
const house = {
  adress: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

const {adress, wallColor} = house;
console.log(adress);
console.log(wallColor);

console.log("\n=======\n");



//  Task_02
function addPrefixToWords(words, prefix){
    const result = [];
    
    for(let i = 0; i < words.length; i++) {
        result.push(prefix + words[i]);
    }
    return result;
}

// Пример:
const fruits = ["apple", "orange"];
const newFruits = addPrefixToWords(fruits, "pine");

console.log(newFruits);
console.log(fruits);

console.log("\n=======\n");



// Task_03
function gardener(operation, item) {
  operation(item);
}

function water(flowers) {
  console.log("I water this " + flowers);
}

gardener(water, "rose");

// +
function plant(plantName) {
  console.log("I plant a " + plantName);
}

function trim(tree) {
  console.log("I trim the " + tree);
}

// 
gardener(plant, "tulip");
gardener(trim, "apple tree");


