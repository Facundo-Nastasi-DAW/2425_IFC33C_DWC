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

window.onload = function (){
    const button = document.querySelector("button");
    let hand = document.querySelectorAll("#card");
    

    button.addEventListener('click', () => {
        flush(hand);
        for(let i = 0; i < 3; i++){
            setTimeout(() => message.innerHTML = i + 1, 1000 * i);
        }
        setTimeout(() => draw(hand), 3000);
    });
}

function flush(hand){
    for (let card of hand){
        card.suit = "";
        card.number = "";
        card.getChild().src = "";
    }
}

function draw(hand){
    for (let card of hand){
        do{
            card.suit = generateSuit();
            card.number = generateNumber();
        } while (revealed(card));
        revealedCards.push(new Card(card.suit, card.number));
        card.getChild.src = "../cards/" + card.number + "_of_" + card.suit + ".png";
    }
}

function revealed(card){
    for (let revealedCard of revealedCards){
        if (card.suit == revealedCard.suit && card.number == revealedCard.number) return true;
    }
    return false;
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