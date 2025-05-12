const form = document.getElementById("animal-form");
const nicknameInput = form.elements["nickname"];
const ageInput = form.elements["age"];
const breedInput = form.elements["breed"];
const animalsContainer = document.getElementById("animals-container");

let animals = [];

function renderAnimals() {
  // delete old elements
  while (animalsContainer.firstChild) {
    animalsContainer.removeChild(animalsContainer.firstChild);
  }

  animals.forEach((animal) => {
    const animalCard = document.createElement("div");

    const nicknameData = document.createElement("span");
    nicknameData.innerText = animal.nickname;

    const ageData = document.createElement("span");
    ageData.innerText = `, ${animal.age}`;

    const breedData = document.createElement("span");
    breedData.innerText = `, ${animal.breed}`;

    animalCard.append(nicknameData, ageData, breedData);
    animalsContainer.appendChild(animalCard);
  });
}

function addAnimal(event) {
    event.preventDefault();

    console.log("submit");

    console.log(nicknameInput.value);;
    console.log(ageInput.value);
    console.log(breedInput.value);

    animals.push({
        nickname: nicknameInput.value,
        age: ageInput.value,
        breed: breedInput.value,
    });
    
    nicknameInput.value = "";
    ageInput.value = "";
    breedInput.value = "";

    renderAnimals(animals);
}

form.addEventListener("submit", addAnimal);
