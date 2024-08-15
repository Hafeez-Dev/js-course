 const promisOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve()
    }, 1000);
 })

 promisOne.then(() => {
    console.log("Promis Consumed")
 })

new Promise((resolve, reject) => {
   setTimeout(() => {
        console.log("Async task 2");
        resolve()
   }, 2000);
   
 }).then(() => {
    console.log("Async 2 resolved");
    
 })

 const promisThree = new Promise((resolve, reject) => {
   setTimeout(() => {
        resolve({username: "Abdul Hafeez", email: "123example@gmail.com"})
   }, 3000);
 })
 
 promisThree.then((user) => {
    console.log(user);
 })
 
 const promisFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Hafeez", pass: "1234"})
        } else {
            reject("ERROR: 404 Not Found!!")
        }
    }, 4000)
 })

 promisFour
 .then((user) => {
    console.log(user)
    return user.username
 })
 .then((username) => {
    console.log(username)
 })
 .catch((err) => {
    console.log(err)
 })
 .finally(() => {
    console.log("The Promis is either resolved or rejected");
    
 })

 const promisFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({language: "JAVASCRIPT", pass: "1234"})
        } else {
            reject("ERROR: JS!!")
        }
    }, 4000)
 })

 async function consumePromisFive() {
    try {
        const response = await promisFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 }

 consumePromisFive()


//  async function getAllUsers() {
//      try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//      } catch (error) {
//         console.log("ERROR");
        
//      }
//  }

//  getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((err) => {
    console.log(err);
    
})