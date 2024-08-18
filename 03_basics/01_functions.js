
function sayMyname(){
    console.log("M");
    console.log("A");
    console.log("Y"); 
    console.log("A"); 
    console.log("N");
    console.log("k");
}
sayMyname()    // it will all the above letters 

function addTwoNumbers(number1, number2){
 console.log(number1 + number2);
}

addTwoNumbers(99, 7989)  //             8088


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result 
   }

   const result = addTwoNumbers(4879, 8787)        // we cant declare addtwonumbers in result under we return it above 
   console.log("Result: ", result);               // 13666


   function loginUserMessage(username){
         return `${username} just logged in`
   }

   console.log(loginUserMessage("Mayank"));           // Mayank just logged in 
console.log(loginUserMessage(""));                     //   just logged in 
console.log(loginUserMessage());                       // undefined just logged in 

function loginUserMessage(username){
    if(username === undefined){                        // username = undefined could also be written as !username 
        console.log("Please enter a Username")
        return                                           // as we have return next code in the box will have no effect 
    }
    return `${username} just logged in`
}                                                       // Please enter a username 
  
function calculateCartPrice(...num1){                    // ... used here is called as rest operator
       return num1
}
console.log(calculateCartPrice(200,400,500,6000));      // [200,400,500,6000]


function calculateCartPrice(val1, val2, ...num1){                   
    return num1
}
console.log(calculateCartPrice(200,400,500,6000));        // [500, 6000]


const user = {
    product: "mango", 
    price: 100,
}

function handleObject(anyObject){
    console.log(`price of ${anyObject.product} is ${anyObject.price}`);
}

handleObject(user)                            // price of mango is 100


const MyArray = [100, 200, 5000, 8049, 54645, 654656, 5997997979];

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(MyArray));      //         8049

