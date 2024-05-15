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
    let itemsArray = Object.entries(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i];
        let currentItemID = currentItem[0];
        let currentItemValue = currentItem[1];
        appendItemToShoppingListEl(currentItemValue)
    }   
})
function clearShoppingListEl() {
    shoppingList.innerHTML = ""
}


function clearInputField(){

    inputEl.value = "";

}
function appendItemToShoppingListEl(item)
{
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    shoppingListEl.append(newEl)
}




