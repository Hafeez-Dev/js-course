function setUsername(username) {
    this.username = username
    console.log('Invoked');
}

function creatUsers(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user1 = new creatUsers('Abdul', '123google.com', 12345)
console.log(user1);
