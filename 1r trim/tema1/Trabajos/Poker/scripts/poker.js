class Card{
    constructor (suit, number){
        this.suit = suit;
        this.number = number;
    }

    equals(card){
        return this.suit == card.suit && this.number == card.number;
    }
}

var revealedCards = [];

function flush(hand){
    for (let card of hand){
        card.src = "assets/cards/black_joker.png";
    }
    const message = document.querySelector("p");
    message.innerText = "";
}

function generateSuit(){
    switch(Math.floor(Math.random() * 4 + 1)){
        case 1:
            return "hearts";
        case 2:
            return "diamonds";
        case 3:
            return "clubs";
    }
    return "spades";
}

function generateNumber(){
    return String(Math.floor(Math.random() * 13 + 1));
}

function revealed(card){
    for (let revealedCard of revealedCards){
        if (revealedCard.equals(card)) return true;
    }
    return false;
}

function noCardsLeft() {
    const message = document.querySelector("p");
    message.innerText = "No quedan más cartas en el mazo."
    
    const button = document.querySelector("button");
    button.innerText = "Reiniciar";
    button.addEventListener('click', () => {
        location.reload();
    });
}

function checkWin(currentCards){
    /*
        Se puede optimizar?
        Se me ocurrió hacer un array con 13 elementos, todos inicializados en 0 (int).
        Cada carta suma 1 al elemento número card.number.
        Después recorreria el array y si hay algun elemento mayor a 1 el jugador gana.

        Lo malo de eso es que no puedo guardar los palos de las cartas que han hecho ganar
        al jugador.
    */
    const message = document.querySelector("p");
    for (let card of currentCards){
        for (let otherCard of currentCards){
            if(!card.equals(otherCard) && card.number == otherCard.number) {
                let winMessage = "Has ganado por las parejas ";
                winMessage = winMessage.concat(card.number, " de ", card.suit);
                winMessage = winMessage.concat(" y ", otherCard.number, " de ", otherCard.suit);
                message.innerText = winMessage;
                return;
            }
        }
    }
    message.innerText = "No tienes ninguna pareja, inténtalo de nuevo.";
}

function draw(hand){
    let newCard;
    let currentCards = [];
    for (let card of hand){
        do{
            newCard = new Card(generateSuit(), generateNumber());
        } while (revealedCards.length < 52 && revealed(newCard));
        if (revealedCards.length == 52) {
            noCardsLeft()
            return;
        }
        revealedCards.push(newCard);
        currentCards.push(newCard);
        card.src = "assets/cards/" + newCard.number + "_of_" + newCard.suit + ".png";
    }
    checkWin(currentCards);
}

window.onload = function (){
    const button = document.querySelector("button");
    let hand = document.querySelectorAll("img");
    

    button.addEventListener('click', () => {
        const message = document.querySelector("p");
        flush(hand);
        for(let i = 0; i < 3; i++){
            setTimeout(() => message.innerText = i + 1, 1000 * i);
        }
        setTimeout(() => draw(hand), 3000);
    });
}