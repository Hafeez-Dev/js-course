// This keyword

const user = {
    username: "Abdul Hafeez",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // return an empty object just in Node Environment if we use in browser it gives u many global objects

function test() {
    let username = "Abdul"
    console.log(this.username);
}
// test()

const test2 = function () {
    let username = "Hafeez"
    console.log(this.username);
    // console.log(this);
}
// test2() //Note: this keyword not workin in both fuctions wether it is arrow or normal

const test3 = () => {
    let username = "Hafeez"
    console.log(this.username);
    // console.log(this);
}
// test3() // but this keyword returned empty object when you print





// +++++++++++++++++++++++++++++++++ Arrow Fuction ++++++++++++++++++++++++++++++++++

const addTwo = (num1, num2) => {
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
// const addTwo = () =>  ({username: "Hafeez"})

console.log(addTwo(3,8));