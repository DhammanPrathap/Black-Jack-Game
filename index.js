let player={
    name:"Prathap",
    chips:249
}

let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent=player.name+" $"+player.chips;

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber>13) return 10
    else if(randomNumber===1)return 11
    else return randomNumber
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard + secondCard
    renderGame()
}

function renderGame(){
    
    cardsEl.textContent="Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    //cardsEl.textContent="Cards : "+cards[0]+" "+cards[1]
    sumEl.textContent="Sum : "+sum
    if(sum<21){
        message="Do you want to Draw a New Card..?"
    }
    else if(sum===21){
        message="You've got Black Jack..!"
        hasBlackJack=true
    }else{
        message="You're out of the Game..!"
        isAlive=false
    }
    messageEl.textContent=message
}


function newCard(){
    if(isAlive===true && hasBlackJack===false){
        //console.log("Drawing a new card from the deck!")
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}
