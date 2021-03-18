function playGame(){
    let colours = ["Red", "Blue", "Yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let deck = getDeck(colours, values);
    let shuffledDeck = shuffle(deck);
    showDeck(shuffledDeck);
}

//Creates an array(deck) of objects(cards)
function getDeck(colours, values){
    debugger;
    let deck = [];
    for(let i = 0; i < colours.length; i++){
        for(let j = 0; j < values.length; i++){
            let card = {Suit: colours[i], Value: values[j]};
            deck.push(card);
        }
    }
    return deck;
}

//Shuffles the deck randomly
function shuffle(deck){
    for(let i = 0; i < 1000; i++){
        let random1 = Math.floor(Math.floor(Math.random() * deck.length));
        let random2 = Math.floor(Math.floor(Math.random() * deck.length));
        let temp = deck[random1];
        deck[random1] = deck[random2];
        deck[random2] = temp;
    }
    console.log(deck);
    return deck;
}

function showDeck(deck){
    debugger;
    let deckHTML = '<table><tr>';
    for (let i = 0; i < deck.length; i++){
        card = deck[i].Suit + deck[i].Value;
        deckHTML += '<td>${card}</td>';
    }
    deckHTML = deckHTML + '<tr></table>';
    document.getElementById("deck").innerHTML = deckHTML;
}
/*
function pickCards(shuffledDeck){
    playerOne(deck);
    playerTwo(deck);
    let i = 1;
    while(i < shuffledDeck.length){
        if(shuffledDeck[i-1].Suit == shuffledDeck){
            (playerOneDeck.push){Suit: shuffledDeck}
        }
    }

}
*/