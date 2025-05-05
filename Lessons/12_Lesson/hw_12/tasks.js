// Task_01
function reverseObject(obj) {
  const result = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
}

console.log(reverseObject({ name: "Bob" }));

// Task_02
const oak = {
    height: 140,
    year: 2025,
    grow() {
        this.height += 30;
        this.year += 1;
    },
};

for(let i=0; i< 20; i++) {
    oak.grow();
    console.log(`Year: ${oak.year}, Height: ${oak.height} cm`);
}

//Task_03

function grow() {
    this.height += 30;
    this.year += 1;
}

const pine = { height: 200, year: 2020 };
const birch = { height: 150, year: 2018 };

const pineGrow = grow.bind(pine);
pineGrow();
console.log(pine);

grow.apply(birch);
console.log(birch);