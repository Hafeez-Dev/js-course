// Date

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let createdDate = new Date(2022, 5, 22)
// let createdDate = new Date(2023, 0, 23, 11, 30)
// let createdDate = new Date("2023/01/14")
let createdDate = new Date("01/14/2023")
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1); //+1 used for to get exact Month bcz JS counts Daate from Zero
// console.log(newDate.getDay() + 1); //+1 used for to get exact date bcz JS counts Day from Zero 


//cutomizing instances
console.log(newDate.toLocaleString('default', {
    weekday: "long",                     
    
}));