let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}
//Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values

let scrimbaUsersEmails = Object.values(scrimbaUsers)
  
console.log(scrimbaUsersEmails);
// Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs= Object.keys(scrimbaUsers)
console.log(scrimbaUsersIDs);

// Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let scrimbaUsersEntries =Object.entries(scrimbaUsers)
console.log(scrimbaUsersEntries)
