const score = 1000
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log( balance.toString() ); //Expected '100' at string
// console.log( balance.toFixed(2) ); //Expected 100.00

const newNum = 124.0435
// console.log(newNum.toPrecision(4));

const hundreds = 100000
// console.log( hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

// console.log(Math.abs(-8));
// console.log(Math.round(124.8));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(45, 7, 23, 54, 2));
// console.log(Math.max(45, 7, 23, 54, 2));

console.log(Math.floor(Math.random()* 10) + 1);

const min = 10
const mix = 20
console.log(Math.floor(Math.random() * (mix - min + 1)) + min); 