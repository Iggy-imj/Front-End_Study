const cars =[
  { brand: "AMW", price: 20000, isDiesel: true },
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];


// reverse - мутирующий! возвращает ссылку на исходный массив

const newCars = cars.reverse();

//newCars.pop();

console.log(newCars);
console.log(cars);

// sort 

const parts = ["air filter", "tires", "spark plugs", "accumulator"];
parts.sort();
console.log(parts); // [ 'accumulator', 'air filter', 'spark plugs', 'tires' ]

const nums = [1, 4, 2, 10, 12];
console.log(nums.sort());

// сортировка чисел

nums.sort((a,b)=> a - b);
console.log(nums);

nums.sort((a,b)=> b - a);
console.log(nums);

// сортировка строк

console.log(parts.sort((a, b) => a.localeCompare(b)));
console.log(parts.sort((a, b) => b.localeCompare(a)));

// сортировка по параметру

cars.sort((a,b) => a.price - b.price);
console.log(cars);

// сравнение по нескольким параметрам
// сначала сравним по цене
// если цена совпадает, то сортируем уже по названию - по алфавиту

const compareCars = (a, b) => {
    const priceComparisonResult = a.price - b.price;
    if (priceComparisonResult === 0) {
      // проверяем по алфавиту
      return a.brand.localeCompare(b.brand);
    }
    return priceComparisonResult;
  };
  
  cars.sort(compareCars);
  
  console.log(cars);