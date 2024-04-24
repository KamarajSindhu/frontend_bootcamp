let firstCard = 11;
let secondCard = 10;
let cards = [firstCard,secondCard];
let sum = firstCard+secondCard;
let message="";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
function startGame()
{
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
}
else
{
    message="You're out of the game!";

}
document.getElementById("message-el").innerText = message;
document.getElementById("sum-el").innerText="The Sum: " +sum;
document.getElementById("card-el").innerText= "Cards:" + cards[0] + " "+ cards[1] ;
}
function newCard()
{
    let card =10;
    sum+= card;
    renderGame();
}


