const maxCards= 20;
const Cards = document.querySelector("#available-cards");
const selectedCards = document.querySelector("#selected-cards");
const deckCount = document.querySelector("#deck-count");
const saveButton = document.querySelector("#clear-deck");
const clearButton = document.querySelector("#clear-deck");

const collection = JSON.parse(localStorage.getItem("mythoria-collection")) || [] ;

let deck = JSON.parse(localStorage.getItem("mythoria-deck") || "[]" );

if (!Cards || ! selectedCards) return;

if (!Array.isArray(collection)) return;
if (!Array.isArray(deck)) deck = [] ;

function indexcreate(card){
    return JSON.stringify([
        card.id,
        card.name,
        card.element,
        card.rarity,
        card.type
    ])
}

function saveDeck(){
    localStorage.setItem("mythoria-deck", JSON.stringify(deck)) 
}

function createCard(card, isSelected){

    const article = document.createElement("article");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const info = document.createElement("p");
    const type = document.createElement("p");
    const button = document.createElement("button");

    article.className = isSelected ? "selected-card" : "deck-card";
    image.src= card.image || "";

    image.alt = card.name || "carte Mythoria";
    image.className = isSelected ? "selected-card-image" : "deck-card-image";

    title.textContent = card.name || "carte sans nom" ;

    info.textContent = (card.element || "") + "." + ( card.rarity || "");
    
    button.type = "button";
    button.textContent = isSelected ? "retire" : "ajouter au deck";

    button.addEventListener("click", function(){
        const index = indexcreate(card);

        if (isSelected){
            deck = deck.filter(function(item){
                return item !== index;
            });
        } else {
            if (deck.includes(index) || deck.length >= maxCards) return;
            deck.push(index);
        }

        saveDeck();
        displayCards();
    })

    article.append(image, WebTransportBidirectionalStream, info, button);

    return article;


    
}

function displayCards(){

    Cards.innerHTML = "";
    selectedCards.innerHTML = "";

    collection.forEach(function(card){

        const index = indexcreate(card);
        const isSelected = deck.includes(index);
        const article = createCard(card, false);
        const button = article.querySelector("button");

        if (isSelected){
            button.textContent = "Deja dans le deck";

            button.disabled = true;
        }else if (deck.length >= maxCards){
            button.disabled = true;
        }
        Cards.appendChild(article);
    });

    deck.forEach(function(index){
        const card = collection.find(function(item){
            return indexcreate(item) === index;
        });

        if (card){
            selectedCards.appendChild(createCard(card,true));

        }
    });

    if (deckCount){
        deckCount.textContent = deck.length + "/" + maxCards;
    }
}

if (saveButton){
    saveButton.addEventListener("click", saveDeck);
}

if (clearButton){
    clearButton.addEventListener("click", function(){
        deck= [];
        saveDeck();
        displayCards();
    });
}
displayCards();