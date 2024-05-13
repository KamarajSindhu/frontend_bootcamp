import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
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
    shoppingList.innerHTML += `<li>${inputvalue}</li>`
    inputEl.value = "";
}
) 