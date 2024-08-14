const score = 100 
console.log(score);

console.log(score.toString()); // converts it to string 
console.log(score.toFixed(4));  // result = 100.0000   - for fixing the decimal points in calculation 


const otherNumber = 123.121
console.log(otherNumber.toPrecision(5));  // result = 123.12  - also number gets converted to string 
console.log(otherNumber.toPrecision(3)); //  rsult = 123

const anotherNumber = 1000000000
console.log(anotherNumber.toLocaleString()); // result = 1,000,000,000


//********************************maths*************************** */

console.log(Math);
console.log(Math.abs(-4)); // result = 4 - converts any negative value into positive
console.log(Math.round(4.54679)); // result = 5
console.log (Math.min(2,8,5,3,4)); // result = 2


console.log(Math.random());
console.log(Math.random()*10 + 1); //+1 as to avoid 0 in case of 0.01 by math.random
console.log(Math.floor(Math.random()*10 + 1)); // math.floor to avoid decimal places 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min + 1)) + min ); // with this a random value will be assigned between 10 and 20

