// Task_01

function validate(str) {
    return str.match(/^[a-z]19[0-9]{2}born$/);
}

const str1 = "i1987born";
const str2 = "b1988born";
const str3 = "1986born"; 
const str4 = "c1886born";
const str5 = "c1986bor";

console.log(validate(str1));
console.log(validate(str2));
console.log(validate(str3));
console.log(validate(str4));
console.log(validate(str5));

console.log("\n========\n");

// Task_02

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";

console.log(sentence.replace(/javascript/gi, "TypeScript"));