
const cards = [
    { id: 1, name: "Dragon de Feu", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3349.jpg" },
    { id: 2, name: "Gardien des Marées", element: "eau", type: "Minions", rarity: "Rare", probability: 25, image: "images/IMG_3350.jpg" },
    { id: 3, name: "Golem des Racines", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3351.jpg" },
    { id: 4, name: "Aigle Céleste", element: "air", type: "Serviteurs de la Lumière", rarity: "Rare", probability: 25, image: "images/IMG_3352.jpg" },
    { id: 5, name: "Esprit de Foudre", element: "foudre", type: "Minions", rarity: "Epic", probability: 15, image: "images/IMG_3353.jpg" },
    { id: 6, name: "Loup de Givre", element: "glace", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3354.jpg" },
    { id: 7, name: "Spectre des Ombres", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3355.jpg" },
    { id: 8, name: "Ange de l’Aube", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3356.jpg" },
    { id: 9, name: "Ignarok", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3357.jpg" },
    { id: 10, name: "Thalassyr", element: "eau", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3358.jpg" },
    { id: 11, name: "Titan de Gorrundar", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3359.jpg" },
    { id: 12, name: "Roi Aelithor", element: "air", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3360.jpg" },
    { id: 13, name: "Voltrak", element: "foudre", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3361.jpg" },
    { id: 14, name: "Dragon Frimaryl", element: "glace", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3362.jpg" },
    { id: 15, name: "Nyxaroth", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3363.jpg" },
    { id: 16, name: "Solariel", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3365.jpg" },
    { id: 17, name: "Démon des Cendres", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3366.jpg" },
    { id: 18, name: "Monstre des Abysses", element: "eau", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3367.jpg" },
    { id: 19, name: "Squelette Maudit", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3368.jpg" },
    { id: 20, name: "Harpyie Noire", element: "air", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3369.jpg" },
    { id: 21, name: "Éclair Maudit", element: "foudre", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3370.jpg" },
    { id: 22, name: "Revenant de Givre", element: "glace", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3371.jpg" },
    { id: 23, name: "Âme Perdue", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3372.jpg" },
    { id: 24, name: "Ange Déchu", element: "lumiere", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3373.jpg" },
    { id: 25, name: "Destin Inconnu", element: "feu", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3374.jpg" },
    { id: 26, name: "Étoile Mystique", element: "eau", type: "Spells", rarity: "Rare", probability: 25, image: "images/IMG_3502.jpg" },
    { id: 27, name: "Coffre Vivant", element: "terre", type: "Minions", rarity: "Epic", probability: 15, image: "images/IMG_3503.jpg" },
    { id: 28, name: "Calice Enchanté", element: "air", type: "Spells", rarity: "Rare", probability: 25, image: "images/IMG_3377.jpg" },
    { id: 29, name: "Écrin Légendaire", element: "foudre", type: "Minions", rarity: "Legendary", probability: 5, image: "images/IMG_3378.jpg" },
    { id: 30, name: "Relique Inconnue", element: "glace", type: "Spells", rarity: "Legendary", probability: 5, image: "images/IMG_3379.jpg" },
    { id: 31, name: "Pyroclaste", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3331.jpg" },
    { id: 32, name: "Phénix Éternel", element: "feu", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3332.jpg" },
    { id: 33, name: "Gardienne des Sources", element: "eau", type: "Serviteurs de la Lumière", rarity: "Rare", probability: 25, image: "images/IMG_3335.jpg" },
    { id: 34, name: "Léviathan Noir", element: "eau", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3336.jpg" },
    { id: 35, name: "Colosse de Pierre", element: "terre", type: "Minions", rarity: "Rare", probability: 25, image: "images/IMG_3337.jpg" },
    { id: 36, name: "Racine Maudite", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3338.jpg" },
    { id: 37, name: "Sylphe d'Argent", element: "air", type: "Serviteurs de la Lumière", rarity: "Common", probability: 40, image: "images/IMG_3339.jpg" },
    { id: 38, name: "Seigneur des Tempêtes", element: "air", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3340.jpg" },
    { id: 39, name: "Faucon Foudroyant", element: "foudre", type: "Minions", rarity: "Rare", probability: 25, image: "images/IMG_3388.jpg" },
    { id: 40, name: "Titan du Tonnerre", element: "foudre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3341.jpg" },
    { id: 41, name: "Renard des Neiges", element: "glace", type: "Serviteurs de la Lumière", rarity: "Common", probability: 40, image: "images/IMG_3342.jpg" },
    { id: 42, name: "Reine des Glaciers", element: "glace", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3343.jpg" },
    { id: 43, name: "Assassin du Néant", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3344.jpg" },
    { id: 44, name: "Dévoreur d'Âmes", element: "ombre", type: "Minions", rarity: "Legendary", probability: 5, image: "images/IMG_3393.jpg" },
    { id: 45, name: "Paladin Solaire", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Epic", probability: 15, image: "images/IMG_3345.jpg" },
    { id: 46, name: "Oracle Céleste", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Rare", probability: 25, image: "images/IMG_3346.jpg" },
    { id: 47, name: "Flamme du Chaos", element: "feu", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3347.jpg" },
    { id: 48, name: "Vague Dévastatrice", element: "eau", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3348.jpg" },
    { id: 49, name: "Séisme Ancestral", element: "terre", type: "Spells", rarity: "Legendary", probability: 5, image: "images/IMG_3381.jpg" },
    { id: 50, name: "Souffle des Cieux", element: "air", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3382.jpg" },
    { id: 51, name: "Chaîne de Foudre", element: "foudre", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3483.jpg" },
    { id: 52, name: "Prison de Cristal", element: "glace", type: "Spells", rarity: "Rare", probability: 25, image: "images/IMG_3484.jpg" },
    { id: 53, name: "Malédiction Éternelle", element: "ombre", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3485.jpg" },
    { id: 54, name: "Lumière Purificatrice", element: "lumiere", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3486.jpg" },
    { id: 55, name: "Mimique Vorace", element: "terre", type: "Minions", rarity: "Epic", probability: 15, image: "images/IMG_3487.jpg" },
    { id: 56, name: "Corbeau Spectral", element: "ombre", type: "Minions", rarity: "Common", probability: 40, image: "images/IMG_3488.jpg" },
    { id: 57, name: "Chevalier du Crépuscule", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3489.jpg" },
    { id: 58, name: "Sirène des Profondeurs", element: "eau", type: "Serviteurs de la Lumière", rarity: "Epic", probability: 15, image: "images/IMG_3490.jpg" },
    { id: 59, name: "Dragon des Cieux", element: "air", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3495.jpg" },
    { id: 60, name: "Arbitre du Destin", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3496.jpg" }
  ];



function openBooster(booster, collection = cards) {
  const eligibleCards = getEligibleCards(booster, collection);

  if (eligibleCards.length === 0) {
    throw new Error(`Aucune carte éligible pour ${booster.name}.`);
  }

  // Sans doublons si assez de cartes, sinon avec remise
  const allowDuplicates = eligibleCards.length < booster.cardsCount;
  const availableCards = [...eligibleCards];
  const pulledCards = [];

  for (let i = 0; i < booster.cardsCount; i++) {
    const selectedCard = drawOneCard(allowDuplicates ? eligibleCards : availableCards);
    pulledCards.push({ ...selectedCard });

    if (!allowDuplicates) {
      const selectedIndex = availableCards.findIndex(c => c.id === selectedCard.id);
      availableCards.splice(selectedIndex, 1);
    }
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




