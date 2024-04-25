// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard,secondCard];
let sum = 0;
let cards =[];
let isAlive = false;
let hasBlackJack = false;
let message="";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
// let player={
//     name:"sindhu", chips:145
// }
// let playerel;
// playerel = document.getElementById("player-el").textContent
function getRandomCard()
{
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard > 10)
    {
        return 10
    }else if(randomCard ===1)
    {
        return 11;
    }else
    {
        return randomCard;
    }
}
function startGame()
{
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard,secondCard];
    let sum = firstCard+secondCard;
    renderGame();
}
function renderGame()
{
    if (sum<=20)
 {
    message="Do you want to draw a new card?";


} else if (sum===21)
{
    message="Wohoo! You've got Blackjack!";  
    isAlive= true;
}
else
{
    message="You're out of the game!";
    isAlive = false;

}

document.getElementById("message-el").innerText = message;
document.getElementById("sum-el").innerText="The Sum: " +sum;
document.getElementById("card-el").innerHTML = "Card: ";
for(let i=0;i<cards.length;i++)
{
    document.getElementById("card-el").innerHTML += cards[i] + " ";
}
}
function newCard()
{
    if(isAlive === true && hasBlackJack===false )
    {
        let card = getRandomCard();
        sum+= card;
        cards.push(card);
        renderGame();
    }
    

}



