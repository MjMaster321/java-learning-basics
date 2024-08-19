const user = {
    username: "Mayank", 
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`); 
        console.log(this);  
   }
}

user.welcomeMessage()                 // Mayank, welcome to the website 
user.welcomeMessage = "sam"
//user.welcomeMessage()

console.log(this);           // will be empty as "{}" beacuse this donates the current function 




function chai(){
    let username = "Mayank"
    console.log(this.username);                // will say undefined as it cant be used with the function 
}

chai()

const chai = () => {                                  // this is called arrow function 
    let username = "Mayank"
    console.log(this.username);                       // result will be undefined 
}

//**********arrow function ******************* */

const addTwo = (num1, num2 ) => (num1 + num2)

console.log(addTwo(525, 8));                    // 533 - called as implicit return when no need to write "return"
