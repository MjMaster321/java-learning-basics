let myDate = new Date()

console.log(myDate.toDateString()); // it will show today's date in string - wed aug 14 2024
console.log(myDate.toISOString());  // 2024-08-14T13:30:28.514Z
console.log(myDate.toLocaleDateString()); // 8/14/2024
console.log(myDate.toLocaleString());  // 8/14/2024, 1:32:29 PM
console.log(myDate.toLocaleTimeString()); // 1:32:29 PM
console.log(typeof myDate); // object 

let EventDate = new Date(2023, 0 , 23);
console.log(EventDate.toDateString()); // Mon Jan 23 2023 - months starts from '0' in javascript

