// Task_01

const str1 = "i1987born";
const str2 = "b1988born";
const str3 = "1986born"; 
const str4 = "c1886born";
const str5 = "c1986bor";

console.log(str1.match(/^[a-z]19[0-9]{2}born$/));
console.log(str2.match(/^[a-z]19[0-9]{2}born$/));
console.log(str3.match(/^[a-z]19[0-9]{2}born$/));
console.log(str4.match(/^[a-z]19[0-9]{2}born$/));
console.log(str5.match(/^[a-z]19[0-9]{2}born$/));

console.log("\n========\n");

// Task_02

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";

console.log(sentence.replace(/javascript/gi, "TypeScript"));