// for 
 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 7; index++) {
    const element = index 
    console.log(element); 
    
}                                //     0  1  2   3   4   5    6

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`); 
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop ${i}`); 
        console.log(i + '*' + j + '=' + i*j); 
        
    }
    
}                       // it will print the table of 1 to 10. 

let myArray = ["superman", "Batman", "Shamzam"]; 

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); 
}                                            // superman
                                            // Batman
                                            // Shazam

// break and continue

for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5) {
        console.log(`detected 5`); 
        break
    }
    console.log(element); 
}                                     //  1   2   3   4   Detected 5


for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5) {
        console.log(`detected 5`); 
        continue
    }
    console.log(element); 
}                               // 1 2 3 4 'detected 5' 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20

