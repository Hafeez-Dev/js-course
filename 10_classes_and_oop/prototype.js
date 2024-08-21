// let myName = "Hafeez     "
// let channelName = "DebugCodez     "

// console.log(myName.trueLength);


let myHeros = ['Thor', 'Spider Man']

let herosPower = {
    thor: 'hammer',
    spiderMane: 'sling',

    getSpiderPower: function() {
        console.log(`Spidy power is: ${this.spiderMane}`);
        
    }
}

Object.prototype.hafeez = function(){
    console.log(`hafeez is present in all Objects`);
}

Array.prototype.sayHafeez = function(){
    console.log(`hafeez say hello!`);
}

// herosPower.hafeez()
// myHeros.hafeez()
// myHeros.sayHafeez()
// herosPower.sayHafeez()


// Inheritence

const user = {
    name: "Abdul",
    email: '123@google.com'
}

const Teacher = {
    makevideo: true
}

Teacher.__proto__ = user  //Method one: to access the user properties 
Object.setPrototypeOf(Teacher, user)  //Method two: to access the user properties


// truLength process
let anotherUsername = "Hafeez      "

String.prototype.truLength = function(){
    console.log(this);
    console.log(`truLength: ${this.trim().length}`);
    
}
anotherUsername.truLength()
"Abdul".truLength()
"DebugCodez".truLength()
