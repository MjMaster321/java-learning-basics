let score = "33abs" 


console.log(typeof score); // it will show string and if we remove "" upside it will show number 

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // will show the type as number 

console.log(valueInNumber); // it will show as NaN; NaN is also a special type

// "33" = 33
// "33abs" = NaN
//  true = 1 ; false = 0 

let isLoggedIn = "mayank"

let booleanIsLoggedIn = Boolean(isLoggedIn) // Boolean should be capslock 

console.log(booleanIsLoggedIn); 

// 1 = true 
// 0 = false 
// "" = false 
// "mayank" = true

//***************operations******************** **************

let value = 3
let negValue = -value
console.log(negValue); // result will be -3

let str1 = "hello"
let str2 = " mayank"

let str3 = str1 + str2 

console.log(str3); // result will be hello mayank 

console.log("1" + 2 ); // result will be 12 
console.log(1 + "2"); // result is 12
console.log("1" + 2 + 3); // result is 123
console.log(1 + 2 + "3"); // result is 33     - important 
