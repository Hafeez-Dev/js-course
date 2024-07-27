// array

const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

// const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray2);

// Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join()

// console.log(myArray);
// console.log(newArr);




// Slice and Splice

const myn1 = myArray.slice(1, 3)
console.log(`Slice: ${myn1}`);
console.log(`Orignal Array: ${myArray}`);

const myn2 = myArray.splice(1, 3)
console.log(`Splice: ${myn2}`);
console.log(`Orignal Array: ${myArray}`);
