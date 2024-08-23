class User {
    constructor(username){
        this.name = username
    }

    logMe() {
        console.log(`My name is: ${this.name}`);
        
    }

    static creatID() {
        return '123'
    }
}
const user1 = new User('Abdul Hafeez')

console.log(User.creatID()) // can call 'creatID()' on the User Class:

// console.log(user1.creatID()); // But NOT on a User Object: this will raise an error.
