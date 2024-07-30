
function setMyName() {
    console.log("H");
    console.log("A");
    console.log("F");
    console.log("E");
    console.log("E");
    console.log("Z");
}

// setMyName()

function addTwoNumbers(num1, num2) {
   
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(4, 6)
// console.log("Result:", result);


function loginUserMessage(mesg = "Unknown") {
    // if(!mesg){
    //     return "please enter a username"
    // }
    return `${mesg} just logged in 😊`
}

// console.log(loginUserMessage("Hafeez")); 


function addCartPrice(...num1) {
    return num1
}

// console.log(addCartPrice(200, 56, 850));


const user = {
    username: "Abdul Hafeez",
    price: 199
}

function handleObject(anyobject) {
    return console.log(`Username is ${anyobject.username} and price $${anyobject.price}`);
}

// handleObject(user) we can also defined object in Fuc Argument
handleObject({
    username: "Hafeez",
    price: 299
})

const newArr = [120, 200, 550, 230]

function usedArray(getArray) {
    return getArray[1]
}

// console.log(usedArray(newArr))
console.log(usedArray([120, 200, 550, 230]))