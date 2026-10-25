
const cards = [
  { id: 1, name: "Dragon de Feu", element: "feu", rarity: "Common", probability: 40, image: "images/IMG_3349.jpg" },
  { id: 2, name: "Gardien des Marées", element: "eau", rarity: "Rare", probability: 25, image: "images/IMG_3350.jpg" },
  { id: 3, name: "Golem des Racines", element: "terre", rarity: "Common", probability: 40, image: "images/IMG_3351.jpg" },
  { id: 4, name: "Aigle Céleste", element: "air", rarity: "Rare", probability: 25, image: "images/IMG_3352.jpg" },
  { id: 5, name: "Esprit de Foudre", element: "foudre", rarity: "Epic", probability: 15, image: "images/IMG_3353.jpg" },
  { id: 6, name: "Loup de Givre", element: "glace", rarity: "Common", probability: 40, image: "images/IMG_3354.jpg" },
  { id: 7, name: "Spectre des Ombres", element: "ombre", rarity: "Epic", probability: 15, image: "images/IMG_3355.jpg" },
  { id: 8, name: "Ange de l’Aube", element: "lumiere", rarity: "Legendary", probability: 5, image: "images/IMG_3356.jpg" },
  { id: 9, name: "Ignarok", element: "feu", rarity: "Legendary", probability: 5, image: "images/IMG_3357.jpg" },
  { id: 10, name: "Thalassyr", element: "eau", rarity: "Legendary", probability: 5, image: "images/IMG_3358.jpg" },
  { id: 11, name: "Titan de Gorrundar", element: "terre", rarity: "Epic", probability: 15, image: "images/IMG_3359.jpg" },
  { id: 12, name: "Roi Aelithor", element: "air", rarity: "Legendary", probability: 5, image: "images/IMG_3360.jpg" },
  { id: 13, name: "Voltrak", element: "foudre", rarity: "Legendary", probability: 5, image: "images/IMG_3361.jpg" },
  { id: 14, name: "Dragon Frimaryl", element: "glace", rarity: "Epic", probability: 15, image: "images/IMG_3362.jpg" },
  { id: 15, name: "Nyxaroth", element: "ombre", rarity: "Legendary", probability: 5, image: "images/IMG_3363.jpg" },
  { id: 16, name: "Solariel", element: "lumiere", rarity: "Legendary", probability: 5, image: "images/IMG_3365.jpg" },
  { id: 17, name: "Démon des Cendres", element: "feu", rarity: "Epic", probability: 15, image: "images/IMG_3366.jpg" },
  { id: 18, name: "Monstre des Abysses", element: "eau", rarity: "Epic", probability: 15, image: "images/IMG_3367.jpg" },
  { id: 19, name: "Squelette Maudit", element: "terre", rarity: "Rare", probability: 25, image: "images/IMG_3368.jpg" },
  { id: 20, name: "Harpyie Noire", element: "air", rarity: "Rare", probability: 25, image: "images/IMG_3369.jpg" },
  { id: 21, name: "Éclair Maudit", element: "foudre", rarity: "Epic", probability: 15, image: "images/IMG_3370.jpg" },
  { id: 22, name: "Revenant de Givre", element: "glace", rarity: "Rare", probability: 25, image: "images/IMG_3371.jpg" },
  { id: 23, name: "Âme Perdue", element: "ombre", rarity: "Common", probability: 40, image: "images/IMG_3372.jpg" },
  { id: 24, name: "Ange Déchu", element: "lumiere", rarity: "Epic", probability: 15, image: "images/IMG_3373.jpg" },
  { id: 25, name: "Destin Inconnu", element: "feu", rarity: "Common", probability: 40, image: "images/IMG_3374.jpg" },
  { id: 26, name: "Étoile Mystique", element: "eau", rarity: "Rare", probability: 25, image: "images/IMG_3375.jpg" },
  { id: 27, name: "Coffre Vivant", element: "terre", rarity: "Epic", probability: 15, image: "images/IMG_3376.jpg" },
  { id: 28, name: "Calice Enchanté", element: "air", rarity: "Rare", probability: 25, image: "images/IMG_3377.jpg" },
  { id: 29, name: "Écrin Légendaire", element: "foudre", rarity: "Legendary", probability: 5, image: "images/IMG_3378.jpg" },
  { id: 30, name: "Relique Inconnue", element: "glace", rarity: "Legendary", probability: 5, image: "images/IMG_3379.jpg" }
];

function openBooster(booster, collection = cards) {
  const eligibleCards = getEligibleCards(booster, collection);

    if (eligibleCards.length < booster.cardsCount) {
      throw new Error(
      `Pas assez de cartes éligibles pour ${booster.name}.`
    );
  }

  const availableCards = [...eligibleCards];
  const pulledCards = [];

  for (let i = 0; i < booster.cardsCount; i++) {
    const selectedCard = drawOneCard(availableCards);
    pulledCards.push(selectedCard);
    const selectedIndex = availableCards.findIndex(card => {
      return card.id === selectedCard.id;
    });

    availableCards.splice(selectedIndex, 1);
  }

  return pulledCards;
}

function getEligibleCards(booster, collection = cards) {
  if (!booster) {
    throw new Error("Booster introuvable");
  }

  let eligibleCards = collection.filter(card => {
    return (
      booster.element === "tous" ||
      card.element === booster.element
    );
  });

  if (booster.name === "Étoile Filante") {
    const rarityOrder = {
      Common: 1,
      Rare: 2,
      Epic: 3,
      Legendary: 4
    };

    eligibleCards = eligibleCards.filter(card => {
      return rarityOrder[card.rarity] >= rarityOrder.Rare;
    });
  }

  return eligibleCards;
}


function drawOneCard(eligibleCards) {
  const totalWeight = eligibleCards.reduce((total, card) => {
    return total + card.probability;
  }, 0);

  if (totalWeight <= 0) {
    throw new Error("Les probabilités doivent avoir un poids positif.");
  }

  let randomValue = Math.random() * totalWeight;

  for (const card of eligibleCards) {
    randomValue -= card.probability;

    if (randomValue < 0) {
      return card;
    }
  }

  return eligibleCards[eligibleCards.length - 1];
}




