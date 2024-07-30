
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

console.log(loginUserMessage("Hafeez")); 