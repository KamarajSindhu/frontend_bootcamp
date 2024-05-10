import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase,  ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// importing the database
const appSettings = {
    databaseURL: "https://realtime-database-afee4-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shopppingListInDB = ref(database,"ShoppingList")
let inputEl = document.getElementById("input-field")
let btn =  document.getElementById("clicked")
btn.addEventListener("click", function(){
    let inputvalue = inputEl.value
    console.log(inputvalue)
}
) 