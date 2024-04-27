let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
{
    largeCountries.pop();    
    largeCountries.push("Pakisthan")
    largeCountries.shift()
    largeCountries.unshift("China")
    console.log(largeCountries);
}
let dayOfMonth = 13
let weekday = "Friday"
if (dayOfMonth===13 && weekday==="Friday")
{
    console.log("😱");
}
let hands = ["rock", "paper", "scissor"]
function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}
console.log( getHand() )