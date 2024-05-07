import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

// Challenge: Make sure that add is working by console logging add with two number arguments.
console.log(add(1,1))

const appSettings = {
    databaseURL: "https://playground-c5b18-default-rtdb.europe-west1.firebasedatabase.app"
}

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value    
    console.log(`${inputValue} added to database`)
})