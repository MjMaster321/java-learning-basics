//singleton - when we define like literals ; singleton is not formed . it is formed using constructors.
// Object.create - constructor

// Object literals 

const mySym = Symbol("Key1")

const JsUser = {
    name: "Mayank", 
    "full name": "Mayank Jain", 
    [mySym]: "myKey1",
    age: 21, 
    location: "Lucknow", 
    email: "mayankjain@gmail.com", 
    isLoggedIn: false, 
    lastLoggedInDays: ["monday", "sunday"], 
}; 

console.log(JsUser.email); // mayankjain@gmail.com
console.log(JsUser["email"])  // mayankjain@gmail.com
console.log(JsUser["full name"]); // Mayank jain
console.log(JsUser[mySym]);      // myKey1

JsUser.email = "mayankjain@chatgpt.com"; 
console.log(JsUser); /* {
                     name: 'Mayank',
                     'full name': 'Mayank Jain',
                     age: 21,
                     location: 'Lucknow',
                     email: 'mayankjain@chatgpt.com',
                     isLoggedIn: false,
                     lastLoggedInDays: [ 'monday', 'sunday' ],
                     [Symbol(Key1)]: 'myKey1'
                      }  */

// Object.freeze(JsUser); - removing this function for further learning downside 
JsUser.email = "mayankjain@microsoft.com"; 
console.log(JsUser) //     email will be email: 'mayankjain@chatgpt.com', - nothing can now be changed 

JsUser.greeting = function(){
    console.log("Hello Mayank")
}; 
console.log(JsUser.greeting()); // Hello Mayank 


JsUser.greetingTwo = function(){
    console.log(`Hello Mayank, ${this.name}`); 
}; 
console.log(JsUser.greetingTwo()) // Hello Mayank, Mayank 



