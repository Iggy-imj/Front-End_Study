// task_01

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const brandAndDiesel = cars.map((car) => ({
  brand: car.brand,
  isDiesel: car.isDiesel,
}));

console.log(brandAndDiesel);

// task_02

const dieselCars = cars.filter((car) => car.isDiesel);
console.log(dieselCars);

// task_03

const nonDieselCars = cars.filter((car) => !car.isDiesel);
console.log(nonDieselCars);

// task_04

const totalNonDieselPrice = cars
  .filter((car) => !car.isDiesel)
  .reduce((sum, car) => sum + car.price, 0);

console.log(totalNonDieselPrice);

// task_05

cars.forEach((car) => (car.price *= 1.2));
console.log(cars);

// task_06

const updatedCars = cars.map((car) => {
  if (car.isDiesel) {
    return { brand: "Tesla", price: 25000, isDiesel: false };
  }
  return car;
});

console.log(updatedCars);
