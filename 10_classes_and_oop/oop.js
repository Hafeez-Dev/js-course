const user = {
    username: "Hafeez",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user details");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
// user.getUserDetails()
// console.log(this);


// Define a constructor function
function User(username, loginCount, signedIn) {
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    // can also define methods
    this.incrementLogin = function() {
        this.loginCount++
    }
}

// Create an instance of the User object
const user1 = new User("Hafeez", 8, true)
const user2 = new User("Abdul", 11, false)

// Access properties and methods
console.log(user2.username);
console.log(user1.signedIn)

user1.incrementLogin()
console.log(user1.loginCount);
