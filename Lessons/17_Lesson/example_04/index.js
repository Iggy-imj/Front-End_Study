// Promise

// Статуты:
// fullfilled - удовлетворен - с результатом
// rejected - отклонено - забыли принести еду
// pending - ожидание

// сначала pending - а потом по обстоятельствам - либо fullfilled, если все ок
// либо rejected - если возникла ошибка или проблема

// Ассинхронные функции - возвращают промис

// Создадим промис, которы возвращает нам бургер

const burgerPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Tasty burger");
  }, 3000);
});

console.log(burgerPromise); // Promise { <pending> }

// подождать значние === раскрыть промис
// метод then - подождет пока появиться значение -
burgerPromise.then((burger) => {
  console.log("Внутри колбека:" + burger);
});

console.log("Вне колбека бургер:", burgerPromise);

// Reject
const badPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("The kitchen is on fire"));
  }, 3000);
});

badPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err);
  });

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// console.log(getRandomNumber(2));

// при успехе - Here is your 3D printer
// не успех - You didn't behave this year!
const printerPresent = new Promise(function (res, rej) {
  setTimeout(() => {
    if (getRandomNumber(2)) {
      res("Here is your 3D printer");
    }
    rej(new Error("You didn't behave this year!"));
  }, 2000);
});

printerPresent
  .then((present) => {
    console.log(present);
  })
  .catch((err) => {
    console.log(err);
  });
