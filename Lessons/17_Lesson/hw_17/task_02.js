function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (getRandomNumber(2)) {
      resolve("Best day of my life");
    }
    reject(new Error("Something is off"));
  }, 2000);
});

randomPromise 
    .then((message) => {
        console.log("Success!", message);
    })
    .catch((error) => {
        console.log("Failure!", error);
    })