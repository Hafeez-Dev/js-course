//singleton
// const obj = Object.create(null)

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hafeez",
    "full name": "Hafeez Khan",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "Hafeez@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['name']);
// console.log(JsUser['full name']);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Hafeez@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "Hafeez@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user!");
}
JsUser.greeting()

JsUser.greeting2 = function() {
    console.log( `Hello JS User, this is ${this.name}`);
}
JsUser.greeting2()