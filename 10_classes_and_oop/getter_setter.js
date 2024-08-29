class User {
  #password; // private field with '#', can't access directly outside class

  constructor(email, password) {
    this.email = email;
    this.#password = password;
  }

  //   define setter for private field
  set pass(val) {
    this.#password = val;
  }

  //   define getter to access private field
  get pass() {
    return this.#password.toUpperCase();
  }
}

const user1 = new User("debuger@gmail.com", "123xyz");

console.log(user1.pass);
