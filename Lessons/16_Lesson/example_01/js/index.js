const form = document.getElementById("personal-data-form");
const heightInput = form.elements["height"];
const genderInput = form.elements["gender"];
const errMessageElement = document.getElementById("error-message");
const resultCard = document.getElementById("result-card");

function onSubmit(e) {
  e.preventDefault();
  //   console.log(heightInput.value, genderInput.value);
  if (validate()) {
    const idealWeight = getIdealWeightByHeightForGender(
      parseInt(heightInput.value),
      genderInput.value
    );
    resultCard.innerText = "Your ideal weight: " + idealWeight;
  }
}

function validate() {
  let errMessage = "";
  let result = true;
  if (!parseInt(heightInput.value)) {
    errMessage += "Invalid weight, please use numbers. ";
    result = false;
  }
  if (parseInt(heightInput.value) > 210) {
    errMessage += "Sorry, but our program doesn't work with height > 210cm";
    result = false;
  }
  errMessageElement.innerText = errMessage;
  return result;
}

function getIdealWeightByHeightForGender(height, gender) {
  if (gender === "male") {
    return height - 100;
  }
  return height - 110;
}

form.addEventListener("submit", onSubmit);
