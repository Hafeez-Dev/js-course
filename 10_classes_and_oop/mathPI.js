const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const Product = {
    name: "Abdul Hafeez",
    price: 250,
    isPurchased: true,

    canOrder: function(){
        console.log(`Not avilable right now!`);
    }
}

console.log(Object.getOwnPropertyDescriptor(Product, 'name'));

Object.defineProperty(Product, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(Product, 'name'));


for (const [key, value] of Object.entries(Product)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

// can't acces 'name' property cuz of 'defineProperty()'