// stack (primitive data type memory) and  heap (non- primitive)

let myYoutubeName = "MayankJainDotCom"
let anotherName = myYoutubeName

console.log(anotherName);  // result will be MayankJainDotCom 

anotherName = "ChaiAurCode"

console.log(anotherName);  // result will be ChaiAurCode
console.log(myYoutubeName);  // result will be MayankJainDotCom - as it is primitive so
                              // it dont change the original value variable data

// ****************heap memory (non primitive )

let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne 

userTwo.email = "mayank@google.com"

console.log(userOne.email);  // result will be mayank@google.com as 
//                        it does not create clone of orginal value like stack memory
console.log(userTwo.email);  // result will be mayank@google.com
