const myNums = [1,2,3]

const myTotal = myNums.reduce( function (acc, currval){
    return acc + currval
}, 0)

console.log(myTotal);                 // 6


const ShoppingCart = [
    {
        course: "js", 
        price: 599
    },
    {
        course: "python", 
        price: 2000
    },
    {
        course: "solidity", 
        price: 15664
    },
    {
        course: "c++", 
        price: 5990
    },
    {
        course: "javacore", 
        price: 5909
    }
]

const PriceToPay = ShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(PriceToPay);                //    30162