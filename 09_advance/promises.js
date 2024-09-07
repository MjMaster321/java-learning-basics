const promiseOne = new Promise(function(resolve, reject){
 // do any async task 
 // Db calls ; cryptography, network 
 setTimeout(function(){
    console.log("Async task is completed"); 
    resolve(); 
 }, 1000)


})

promiseOne.then(function(){
    console.log("promise completed")
})                                              //      Async task is completed
                                                //      promise completed

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve(); 
    }, 1000);
    
    
}).then(function(){
    console.log("Promise 2 completed"); 
})                                               // Async task 2 completed
                                                 // Promise 2 completed


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Mayank jain", email: "mayank@google.com"})
    }, 1000)
})                                                 

promiseThree.then(function(user){
    console.log(user); 
})                                                                 // { username: 'Mayank jain', email: 'mayank@google.com' }

const promiseFour = new Promise(function(resolve, reject){
      setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username: "Mayank", email: "mayank@google.com"})
        } else {
            reject('ERROR: something went wrong')
        }
      }, 1000)
    
})   

promiseFour.then(function(user){
      console.log(user);
      return user.username; 
}).then(function(username){
      console.log(username); 
}).catch(function(){
    console.log(error);                         //  { username: 'Mayank', email: 'mayank@google.com' }
    
})                                             //    Mayank

// async await can also be used in place of .then and .catch 

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        console.log(data); 
    } catch (error) {
        console.log("E: ", error); 
    }
}

getAllUsers()                            