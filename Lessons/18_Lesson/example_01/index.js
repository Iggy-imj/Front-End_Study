// JSON
// JavaScript oject notation

const user = {
    name: "john",
    age: 18,
};

// основной формат передачи и хранения информации - это JSON

const usserAsJSONString = JSON.stringify(user);
console.log(usserAsJSONString); // {"name":"john","age":18}

const userFromJson = JSON.parse(usserAsJSONString);
console.log(userFromJson); // { name: 'john', age: 18 }