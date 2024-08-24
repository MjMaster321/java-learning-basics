// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}                        // 1  2   3    4    5    will be printed vertically 

const greetings = "Hello Buddy"

for (const greet of greetings) {
   console.log(`printing it like ${greet}`); 
}


//Maps 

const map = new Map()

map.set("IN", "INDIA")
map.set("FR", "FRANCE")
map.set("USA", "UNITED STATES OF AMERICA")

console.log(map);              //   'IN' => 'INDIA',
                               //   'FR' => 'FRANCE',
                               //   'USA' => 'UNITED STATES OF AMERICA'

// for in loop 

const myObject = {
    js: "javascript", 
    cpp: "c++", 
    rb: "ruby", 
    swift: "swift by apple", 
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject}`); 
}


