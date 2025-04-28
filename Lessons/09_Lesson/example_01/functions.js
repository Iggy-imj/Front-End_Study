function sum(a, b = 14) {
    return a + b;
}

sum(10, 12);

console.log(sum(2));


function surname(surname) {
    if(surname){
        return console.log("Hi, " + surname + "! How are you?");
    } else {
        return console.log("Hi, Dowson! How are you?");
    }
}
surname();



function surname(surname) {
    const name = surname || "Dowson";
    return console.log("Hi, " + name + "! How are you?");
}
surname();
surname("Nik");


function greet(familyName = "Dowson") {
    return `Hi, ${familyName}! How are you?`;
}
console.log(greet());


function greet(familyName) {
    return `Hi, ${familyName ? familyName : "Dowson"}! How are you?`;
}
console.log(greet("UUUUUU"));