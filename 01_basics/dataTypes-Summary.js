// Premitive
// 7 types: number, string, bool, null, undefined, BigInt, symbol

const score = 23945
const pointedScore = 344.85

const isLogged = false
let name = "Abdul Hafeez"
let checkWeather = null

let unknown = undefined
const bigNumber = 238934539045834598n

const id = Symbol(12345)
const anotherId = Symbol(12345)

console.log(id == anotherId); //fale bcs it's a Uniqe Symbol


// Refrence (Non Premitive)
// array, object, function

const holyBooks = [ "Quran", "Twrat", "Zabur", "Injil" ]

const myObj = {
    name: "Abdul Hafeez",
    id: 19976,
    pass: 8471
}

function myFun() {
    console.log("Hellow World");
}

console.log(typeof holyBooks);