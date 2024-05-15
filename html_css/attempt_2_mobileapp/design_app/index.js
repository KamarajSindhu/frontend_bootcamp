import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// importing the database
const appSettings = {
    databaseURL: "https://realtime-database-afee4-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shopppingListInDB = ref(database,"shoppingList")
const inputEl = document.getElementById("input-field")
const shoppingList =document.getElementById("shopping-list")
const btn =  document.getElementById("clicked")
btn.addEventListener("click", function(){
    let inputvalue = inputEl.value;    
    //push data into db
    push(shopppingListInDB,inputvalue)
    clearInputField();
}
) 
onValue(shopppingListInDB,function(snapshot){
    let itemsArray = Object.values(snapshot.val())

    console.log(snapshot.val())
    clearShoppingListEl()

    for (let i = 0; i < itemsArray.length; i++) {
        appendItemToShoppingListEl(itemsArray[i])
    }   
})
function clearShoppingListEl() {
    shoppingList.innerHTML = ""
}


function clearInputField(){

    inputEl.value = "";

}
function appendItemToShoppingListEl(itemvalue)
{
    shoppingList.innerHTML += `<li>${itemvalue}</li>`
}

// Object into an array//
// let scrimbaUsers = {
//     "00": "sindre@scrimba.com",
//     "01": "per@scrimba.com",
//     "02": "frode@scrimba.com"
// }
// let scrimbaUsersEmails = Object.values(scrimbaUsers);
// console.log(scrimbaUsersEmails);
// let scrimbaUsersID = Object.keys(scrimbaUsers);
// console.log(scrimbaUsersID);
// let scrimbaUsersEntries = Object.entries(scrimbaUsers);
// console.log(scrimbaUsersEntries);



