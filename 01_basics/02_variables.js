const accountID = 15543;
let accountEmail = "debugerxy@gmail.com";
var accountPassword = "12345";
accountCity = "Peshawar";

// accountID = 1441
accountEmail = "123@gmail.com";
accountPassword = "54321";
accountCity = "Lahore";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(typeof accountID);

console.table([accountID, accountEmail, accountPassword, accountCity]);
