const email = "mayank@google.com"

if (email) {
    console.log("got the email"); 
} else {
    console.log("don't have mail"); 
}                                                                // got the email


const email2 = ""

if (email2) {
    console.log("got the email"); 
} else {
    console.log("don't have mail"); 
}                                                                 //  don't have mail 


const email3 = []

if (email3) {
    console.log("got the email"); 
} else {
    console.log("don't have mail"); 
}                                                                // got the mail 

//  falsy values

// 0,  -0,  BigInt 0n,  null,  undefined,  "" ,  NaN,  False 
                    
// all values except these are truthy values and any values in strings are also truthy values 


// terniary operator 
// condition ? true : false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less than 80") : console.log("graeter than 80")            // more than 80