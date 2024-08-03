//for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
        // console.log(`${myObject[key]} shortcut is :- ${key}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
        // console.log(programming[key]);
        
}


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', 4);

for (const key in map1) {
//     console.log(key);
    
}

// Note:
// * Can't iterate over a Map object in JavaScript using a for...in loop. The for...in loop is designed for iterating over the enumerable properties of an object, and it doesn't work with Map objects.

// * To iterate over a Map, you should use its built-in iteration methods, such as:
// forEach method, For of loop.