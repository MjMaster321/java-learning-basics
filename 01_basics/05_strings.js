const name = "mayank"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('MayankMJ'); 

console.log(gameName[0]); // result =  M
console.log(gameName.length); // result = 8 
console.log(gameName.toUpperCase()); // result = MayankMJ 
console.log(gameName.charAt(2));      // result = y
console.log(gameName.indexOf('y'));   // result = 2

const newString = gameName.substring(0,4);

console.log(newString); // result = Maya - that means 
//                                     it not includes 5 th one as the instruction says 0 to 4

const anotherString = gameName.slice(-8,1);
console.log(anotherString); // result = M

const newStringOne = "    MayankJain     "
console.log(newStringOne);                
console.log(newStringOne.trim());  // MayankJain - .trim removes the extra spaces 


const url = "https://mayank.com/mayank%20jain"
console.log(url.replace('%20', '-' )); //result = https://mayank.com/mayank-jain

console.log(url.includes('sunny')); // result = false 

