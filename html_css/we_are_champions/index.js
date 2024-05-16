import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://feedback-8cb4b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const championsInDB = ref(database,"feedBack")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const championEl = document.getElementById("champions")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(championsInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(championsInDB, function(snapshot) {
    
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearchampionEL()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemTochampionEL(currentItem)
        }    
    } else {
        championEl.innerHTML = "No Feedbacks"
    }
    
    
})

function clearchampionEL() {
    championEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemTochampionEL(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `feedBack/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    championEl.append(newEl)
}