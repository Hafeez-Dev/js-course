class User {
    constructor(username){
        this.name = username
    }

    logMe(){
        console.log(`USERNAME is ${this.name}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.name}`);
        
    }
}

const user1 = new Teacher("Abdul", '123@gmail.com', 12345)
const user2 = new User('Hafeez')

user1.logMe()
user2.logMe()  //NOTE: can't access properties and methods of child class directly

console.log(user1 instanceof Teacher);
