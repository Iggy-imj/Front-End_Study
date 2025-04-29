let fruit = "apple";

let fruitUpper = fruit.toUpperCase();
console.log(fruitUpper); // APPLE

console.log(fruit[0]); // a
console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined
console.log(fruit.at(10)); // undefined

console.log(fruit.toUpperCase().toLowerCase()); // apple // pipeline

console.log(fruit.charAt(0));

console.log(fruit.charCodeAt(0)); // 97

// useful
// "pine" + "apple"

const pine = "pine";
if (pine) {
  const pineapple = pine.concat(fruit);
  console.log(pineapple);
}

const email = " John@gmail.com   ";
console.log(email.trim().toLowerCase());
console.log(email.indexOf("@")); // 5 index
console.log(email.indexOf("$")); // -1 

console.log(email.trimStart());
console.log(email.trimEnd());

// pad
const cake = "Cake";
console.log(cake.padStart(7));
console.log(cake.length);

console.log(cake.padEnd(7));
console.log(cake.padEnd(10, "*"));

// slice
const sliceOfCake = cake.slice(3);
console.log(sliceOfCake);

console.log(cake.slice(0));
console.log(cake.slice(1));

console.log(cake.slice(1, 3));
console.log(cake.slice(-2));

// substring
const animal= "panda";
console.log(animal.substring(2));

console.log(animal.substring(2, 4));

const token = "paper.bread.leaf";
const indexOfFirstDot = token.indexOf(".");
const indexOfLastDot = token.lastIndexOf(".");
console.log(indexOfFirstDot);
console.log(indexOfLastDot);


// Напишем метод который принимает имейл и возвращает имя пользоватался( все что идет до значка собаки)
// getNameFromEmail
// "iggy-ig@gmail.com" --> iggy-ig

function getNameFromEmail(email) {
    return email.slice(0, email.indexOf("@")).trim();
}
console.log(getNameFromEmail("  iggy-ig@gmail.com  "));

//

// function getNameFromEmail2(email) {
//     const atIndex = email.indexOf("@");
//     if (atIndex < 0) {
//         throw new Error("Invalid email");
//     }
//     return email.slice(0, atIndex).trim();
// }
// console.log(getNameFromEmail2("  iggy-iggmail.com  "));

// try {
//     console.log(getNameFromEmail2("alisher-khamidovgmail.com"));
// } catch(error){
//     console.log(error);
// }

//

function getEmailService(email) {
    return email.slice(email.indexOf("@")).trim();
}
console.log(getEmailService("  iggy-ig@gmail.com "));

function getFirstName(email) {
    return email.slice(0, email.indexOf("-")).trim();
}
console.log(getFirstName("   iggy-ig@gmail.com"));



