//ES6

class classConstructor {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new classConstructor("Abdul", "123exampl@gmail.com", 123)

console.log(user1.encryptPassword());
console.log(user1.changeUsername())

// behind the scene

function FuncConstructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

FuncConstructor.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
FuncConstructor.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}


const user2 = new FuncConstructor("Hafeez", "123@gmail.com", 123)

console.log(user2.encryptPassword());
console.log(user2.changeUsername())