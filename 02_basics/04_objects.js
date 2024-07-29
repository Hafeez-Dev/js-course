// const obj = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Hafeez"
tinderUser.isLogged = false

// console.log(tinderUser);

const regularUser = {
    email: "123Hafeez@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abdul",
            lastname: "Hafeez",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
const objAssign = Object.assign({}, obj1, obj2, obj3)
// console.log(objAssign);

const newObj = {...obj1, ...obj2}
// console.log(newObj);

const users = [
    {
        id: 1,
        email: "xyz@gmail.com"
    },
    {
        id: 1,
        email: "xyz@gmail.com"
    },
    {
        id: 1,
        email: "xyz@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name")); 




// ++++++++++++++++++ Object De-Structure ++++++++++++++++++++
const course = {
    courseName: "Web Dev",
    price: "$99",
    courseInstructor: "Abdul Hafeez"
}

const{courseInstructor: instructor} = course //Object De-Structured

// console.log(courseInstructor); //can't access the properties directly
// console.log(instructor);


//JSON
const Obj = {
    "name": "Hafeez",
    "email": "123Hafeez@gmail.com",
    "pass": 123
}

const objJson = JSON.stringify(Obj) //conver Object into JSON 
console.log(objJson);


const json = `{
    "name": "Hafeez",
    "email": "123Hafeez@gmail.com",
    "pass": 123
}`
const JsonObj = JSON.parse(json) //conver JSON into Object Now can access the properties 
console.log(JsonObj);




/*
SUMMARY
JSON String: A textual representation of data.

Parsing: Convert JSON string to JavaScript object using JSON.parse().

Access Properties: Once parsed, you can access properties using dot or bracket notation, just like with any JavaScript object.

Remember, you cannot directly access properties of a JSON string without parsing it first. Once parsed, you can work with it as a regular JavaScript object.*/