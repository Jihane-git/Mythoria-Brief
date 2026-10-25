const openedCardsContainer = document.querySelector("#opened-cards");
const collectionContainer = document.querySelector("#my-collection");

let myCollection = JSON.parse(
  localStorage.getItem("mythoria-collection")
) || [];


function saveCollection() {
  localStorage.setItem(
    "mythoria-collection",
    JSON.stringify(myCollection)
  );
}

function renderCollection() {
  displayCards(myCollection, collectionContainer);
}
function displayCards(cardsToDisplay, container) {
  if (!container) return;

  if (cardsToDisplay.length === 0) {
    container.innerHTML = "<p>Aucune carte à afficher.</p>";
    return;
  }

  container.innerHTML = cardsToDisplay.map(card => `
    <article class="card-item">
      <img
        src="${card.image}"
        alt="${card.name}"
        class="card-image"
      >

      <h3>${card.name}</h3>
      <p>Élément : ${card.element}</p>
      <p>Rareté : ${card.rarity}</p>
    </article>
  `).join("");
}

function handleOpenBooster(event) {
  const button = event.target.closest(".openBooster");

  if (!button) return;

  const boosterId = Number(button.dataset.id);

  const boosterIndex = MyBoosters.findIndex(booster => {
    return booster.id === boosterId;
  });

  if (boosterIndex === -1) {
    alert("Ce booster n'est plus disponible.");
    return;
  }

  const booster = MyBoosters[boosterIndex];

  let pulledCards;

  try {
    pulledCards = openBooster(booster);
    
  } catch (error) {
    alert(error.message);
    return;
  }

  displayCards(pulledCards, openedCardsContainer);

  modal.style.display = "flex";
  
  myCollection.push(...pulledCards);
  saveCollection();

  MyBoosters.splice(boosterIndex, 1);

  saveMyBoosters();

  renderCartPanier();

  renderCollection();

}
