// for of

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(greet);
    
}


//Maps

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', 4);


// console.log(map1);

for (const [key, value] of map1) {
    console.log(key,':-',value);
    
}

//Trying on objects
const myObg = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// test = Object.entries(myObg) //methods to make it itrable can also access with .keys() and .values()

// for (const [key, value] of myObg) {    //myObj is not iterable need to make it iterable
//     console.log(typeof key,':-', typeof value);
    
// }