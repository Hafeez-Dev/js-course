// Reduce Method

const myNums = [1, 2, 3]  //If the array is empty, reduce will throw a TypeError when no initial value is provided.

const myTotal = myNums.reduce( (acc, currVal) => {
    // console.log(`acc: ${acc} and currval: ${currVal}`);
    return acc + currVal
}, 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, currval) => {
    return acc + currval.price
}, 0 )

console.log(priceToPay);
