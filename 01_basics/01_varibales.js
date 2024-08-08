const accountId = 111
let accountEmail = "sambhavjain9554@gmail.com"
var accountPassword = "9044"
accountCity = "lucknow"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sambhavjain9044@gmail.com"
accountPassword = "9544"
accountCity = "jammu"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])