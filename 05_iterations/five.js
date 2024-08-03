// For each

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (items) => {
    // console.log(items);
} )

const printMe = (item) => {
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (items, index, arr) => {
    // console.log(items, index, arr);
    
} )



const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', 4);

map1.forEach((values, key) => {
    // console.log(`Key: ${key}, Value: ${values}`);
    
})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
    
} )


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((value, index, array) => {
//     array[index] = value * 2;
// });

// console.log(numbers); // [2, 4, 6, 8, 10]
// Note:
// forEach: Can modify the original array if the elements are directly changed inside the loop.