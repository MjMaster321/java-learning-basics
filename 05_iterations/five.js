const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter( (num) => num > 4)
console.log(newNum);                   // [5,6,7,8,9,10]


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map( (num) => num + 10)

console.log(newNums);                 // [11,12,13,14,15,16,17,18,19,20]

///chaining 

const newNums1 = myNumbers.map( (num) => num * 10).map( (num) => num + 1)
console.log(newNums1);                     //[11,21,31,41,51,61,71,81,91,101]

const newNums2 = myNumbers.map( (num) => num * 10).map( (num) => num + 1).filter( (nums) => nums > 50)
console.log(newNums2);                     //[51,61,71,81,91,101]

