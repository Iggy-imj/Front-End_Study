const heading = document.getElementById("heading");
const imgPirate = document.getElementById("pirate-picture");
const favDrinkElement = document.getElementById("fav-drink");
const parrotsContainer = document.getElementById("parrots-container");

fetch("https://alisherkhamidov.github.io/fake-pirate/joe-sparrow.json")
  //  Promise<res>
  .then((res) => {
    console.log(res.status);
    console.log(res.ok); //
    // console.log(res);
    if (res.status === 404) {
      throw new Error("Custom not fount message");
    }
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
    // достали всю необходимую информацию с помощью деструктуризации
    const {name, url, favouriteDrink, parrots} = data;
    heading.innerText = name;
    imgPirate.src = url;
    imgPirate.style.width = "200px";
    favDrinkElement.innerText = favouriteDrink;
    
    parrots.forEach((parrot) => {
      const parrotCard = document.createElement("li");
      parrotCard.innerText = parrot.name;
      parrotsContainer.appendChild(parrotCard);
    });


  })
  .catch((err) => {
    console.log(err.message);
  });

// HTTP - протокол клиент-серверного взаимодействия
// Статусы:
// 200 - Success - успех - получили ответ
// 400 - Bad request
// 401 - Unauthorized -
// 403 - Access Denied - доступ запрещен
// 404 - Not found
// 500 - Server error

// 200-299 - положительные статусы
// 300-400 - редирект
// 400-500 - ошибки
