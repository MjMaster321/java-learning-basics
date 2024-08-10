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