const marvelHeroes = ["spiderman", "thor", "Ironman"]; 
const dcHeroes = ["flash", "Batman", "superman",]; 

marvelHeroes.push(dcHeroes); 
console.log(marvelHeroes); //[ 'spiderman', 'thor', 'Ironman', [ 'flash', 'Batman', 'superman' ] ]

console.log(marvelHeroes[3] [1]); // Batman 

marvelHeroes.concat(dcHeroes); 
console.log(marvelHeroes)       //[ 'spiderman', 'thor', 'Ironman', [ 'flash', 'Batman', 'superman' ] ]

const newHeroes = [...marvelHeroes, ...dcHeroes]; 
console.log(newHeroes); //spread out each values 

console.log(Array.isArray("Mayank")); // false
console.log(Array.from("Hitesh")); // ['H', 'i', 't', 'e', 's', 'h']; 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3)); //[100,200,300]

