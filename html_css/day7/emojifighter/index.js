// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getEl'ementById("fightButton")

// fightButton.addEventListener("click", function() {
//     let randomIndexOne = Math.floor( Math.random() * fighters.length )
//     let randomIndexTwo = Math.floor( Math.random() * fighters.length )
//     stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
// })
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
function arrFruits()
{
    for(i=0;i<fruit.length;i++)
    {
        if (fruit[i]==="🍎")
        {
            appleShelf.innerHTML += " 🍎"
        } 
        else
        {
            orangeShelf.innerHTML+=" 🍊"
        }
    }
}
