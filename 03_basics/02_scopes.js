//Scopes in JS

var c = 300
let a = 300
if(true) {
    let a = 20
    const b = 30
    var c = 40

    console.log("INNER:", a);
}

console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Hafeez"

    function two() {
        const website = " YouTube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()


if (true) {
    const username = "Abdul Hafeez"
    if (username === "Abdul Hafeez") {
        const website = " YouTube"
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++++++ Hoisting ++++++++++++++++++++++++++++++


console.log(addone(5)) //returned 6
function addone(num) {
    return num + 1
}

addtwo(8) //Cannot access 'addtwo' before initialization
const addtwo = function(num) {
    return num + 2
}