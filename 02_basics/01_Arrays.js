const myArr = [0, 1, 2, 3, 4, 5 ] // [] = brackets; () = parenthesis ; {} = braces ; 

const myHeroes = ["spiderman", "Batman", "IronMan"]; 
const myArr1 = new Array(1,2,3,4);

console.log(myHeroes[0]); // result = spiderman 

// Array methods 

myArr.push(6)
myArr.push(7)

console.log(myArr); // [0,1,2,3,4,5,6,7]

myArr.pop()
console.log(myArr); // [0,1,2,3,4,5,6]

console.log(myArr.includes(10)); // false 

const newArr = myArr.join()
console.log(myArr); // [0,1,2,3,4,5,6]
console.log(newArr); // 0,1,2,3,4,5,6

// slice ; splice 

console.log("A ", myArr);  // A [0,1,2,3,4,5,6]

const myN1 = myArr.slice(1,3); 
console.log(myN1);                 // [1,2]


console.log("B ", myArr);   // B [0,1,2,3,4,5,6]


const myN2 = myArr.splice(1,3)
console.log(myN2);              //  [1,2,3,]   - splice includes that 3rd element also 
console.log("C ", myArr);       // C [0,4,5,6]  - **SPLICE manupulates the originals array value 


                    