let x;

setTimeout(() => {
    x = 10;
}, 0);

console.log(x);

// Intervals

const printHello = () => {
    console.log("hello");
};

const printHelloInterval = setInterval(printHello, 1500);

// остановить повторение через 5 сек
setTimeout(() => {
    clearInterval(printHelloInterval);
}, 5_000);