const cards = [
    { id: 1, name: "Dragon de Feu", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3349.jpg", description: "Avantage : inflige de lourds dégâts de feu aux adversaires. Stratégie : utilise-le pour attaquer rapidement les ennemis vulnérables à cet élément." },
    { id: 2, name: "Gardien des Marées", element: "eau", type: "Minions", rarity: "Rare", probability: 25, image: "images/IMG_3350.jpg", description: "Avantage : contrôle le rythme du combat grâce à ses pouvoirs aquatiques. Stratégie : joue-le pour ralentir les adversaires et protéger tes autres cartes." },
    { id: 3, name: "Golem des Racines", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3351.jpg", description: "Avantage : offre une défense solide grâce à sa nature résistante. Stratégie : place-le en première ligne pour protéger tes cartes offensives." },
    { id: 4, name: "Aigle Céleste", element: "air", type: "Serviteurs de la Lumière", rarity: "Rare", probability: 25, image: "images/IMG_3352.jpg", description: "Avantage : se déplace rapidement et frappe depuis les airs. Stratégie : utilise sa mobilité pour surprendre les ennemis et cibler les adversaires fragiles." },
    { id: 5, name: "Esprit de Foudre", element: "foudre", type: "Minions", rarity: "Epic", probability: 15, image: "images/IMG_3353.jpg", description: "Avantage : déclenche des attaques électriques rapides. Stratégie : joue-le pour affaiblir plusieurs ennemis et soutenir une offensive agressive." },
    { id: 6, name: "Loup de Givre", element: "glace", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3354.jpg", description: "Avantage : utilise le froid pour gêner les mouvements adverses. Stratégie : associe-le à une carte offensive pour immobiliser les ennemis avant d'attaquer." },
    { id: 7, name: "Spectre des Ombres", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3355.jpg", description: "Avantage : excelle dans les attaques surprises et les embuscades. Stratégie : utilise-le pour cibler les adversaires isolés et désorganiser la défense ennemie." },
    { id: 8, name: "Ange de l’Aube", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3356.jpg", description: "Avantage : apporte une puissance sacrée et un soutien précieux à ton équipe. Stratégie : joue-le au moment décisif pour renforcer tes alliés et renverser le combat." },
    { id: 9, name: "Ignarok", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3357.jpg", description: "Avantage : possède une puissance destructrice capable de bouleverser le champ de bataille. Stratégie : garde-le pour une attaque décisive contre les adversaires les plus résistants." },
    { id: 10, name: "Thalassyr", element: "eau", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3358.jpg", description: "Avantage : maîtrise les marées pour contrôler les affrontements. Stratégie : combine-le avec des cartes défensives pour ralentir l'ennemi et préparer une contre-attaque." },
    { id: 11, name: "Titan de Gorrundar", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3359.jpg", description: "Avantage : sa stature colossale en fait un excellent rempart. Stratégie : utilise-le pour absorber la pression ennemie pendant que tes autres cartes attaquent." },
    { id: 12, name: "Roi Aelithor", element: "air", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3360.jpg", description: "Avantage : domine les vents et favorise les offensives rapides. Stratégie : associe-le à des cartes aériennes pour créer une équipe mobile et difficile à arrêter." },
    { id: 13, name: "Voltrak", element: "foudre", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3361.jpg", description: "Avantage : libère une énergie électrique dévastatrice. Stratégie : réserve-le pour affaiblir les ennemis dangereux avant de lancer l'attaque finale." },
    { id: 14, name: "Dragon Frimaryl", element: "glace", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3362.jpg", description: "Avantage : combine puissance draconique et contrôle du froid. Stratégie : ralentis les adversaires avec lui avant de concentrer les attaques sur une cible." },
    { id: 15, name: "Nyxaroth", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3363.jpg", description: "Avantage : exploite les ténèbres pour exercer une forte pression offensive. Stratégie : utilise-le comme pièce maîtresse d'une équipe axée sur les attaques surprises." },
    { id: 16, name: "Solariel", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3365.jpg", description: "Avantage : canalise l'énergie solaire pour soutenir les forces de la Lumière. Stratégie : combine-le avec des alliés défensifs pour prolonger leur résistance et préparer une offensive." },
    { id: 17, name: "Démon des Cendres", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3366.jpg", description: "Avantage : répand les flammes et menace les ennemis regroupés. Stratégie : utilise-le lorsque plusieurs adversaires sont vulnérables afin de maximiser la pression offensive." },
    { id: 18, name: "Monstre des Abysses", element: "eau", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3367.jpg", description: "Avantage : surgit des profondeurs pour surprendre ses adversaires. Stratégie : joue-le pour perturber les lignes ennemies et soutenir les attaques de tes autres serviteurs." },
    { id: 19, name: "Squelette Maudit", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3368.jpg", description: "Avantage : représente une menace persistante grâce à sa nature maudite. Stratégie : utilise-le pour maintenir la pression sur l'ennemi pendant que tes cartes principales se préparent." },
    { id: 20, name: "Harpyie Noire", element: "air", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3369.jpg", description: "Avantage : profite de sa mobilité aérienne pour attaquer les points faibles. Stratégie : cible les adversaires fragiles et évite les affrontements directs avec les défenseurs puissants." },
    { id: 21, name: "Éclair Maudit", element: "foudre", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3370.jpg", description: "Avantage : déclenche une décharge magique destinée à frapper durement l'adversaire. Stratégie : lance ce sort contre une cible dangereuse pour faciliter son élimination." },
    { id: 22, name: "Revenant de Givre", element: "glace", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3371.jpg", description: "Avantage : associe endurance et pouvoirs glacials pour gêner les ennemis. Stratégie : utilise-le pour ralentir une cible pendant que tes attaquants prennent l'avantage." },
    { id: 23, name: "Âme Perdue", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3372.jpg", description: "Avantage : constitue un renfort accessible pour une stratégie basée sur les ténèbres. Stratégie : utilise-la pour compléter ton équipe et soutenir tes cartes plus puissantes." },
    { id: 24, name: "Ange Déchu", element: "lumiere", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3373.jpg", description: "Avantage : unit les pouvoirs célestes à une approche plus sombre et agressive. Stratégie : exploite sa polyvalence pour renforcer une équipe offensive centrée sur les ténèbres." },
    { id: 25, name: "Destin Inconnu", element: "feu", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3374.jpg", description: "Avantage : offre une option magique imprévisible liée au feu. Stratégie : utilise ce sort pour soutenir une offensive ou mettre la pression sur un ennemi affaibli." },
    { id: 26, name: "Étoile Mystique", element: "eau", type: "Spells", rarity: "Rare", probability: 25, image: "images/IMG_3502.jpg", description: "Avantage : canalise une énergie mystique pour influencer le combat. Stratégie : joue ce sort au moment opportun afin de soutenir tes cartes aquatiques et préparer une attaque." },
    { id: 27, name: "Coffre Vivant", element: "terre", type: "Minions", rarity: "Epic", probability: 15, image: "images/IMG_3503.jpg", description: "Avantage : surprend l'adversaire grâce à sa nature de créature dissimulée. Stratégie : utilise-le pour perturber les plans ennemis et protéger tes cartes les plus précieuses." },
    { id: 28, name: "Calice Enchanté", element: "air", type: "Spells", rarity: "Rare", probability: 25, image: "images/IMG_3377.jpg", description: "Avantage : concentre une magie subtile qui peut soutenir une stratégie aérienne. Stratégie : utilise-le en complément de tes serviteurs rapides pour préparer une offensive coordonnée." },
    { id: 29, name: "Écrin Légendaire", element: "foudre", type: "Minions", rarity: "Legendary", probability: 5, image: "images/IMG_3378.jpg", description: "Avantage : constitue un renfort exceptionnel chargé d'énergie électrique. Stratégie : intègre-le à une équipe offensive et protège-le jusqu'au moment où son intervention sera décisive." },
    { id: 30, name: "Relique Inconnue", element: "glace", type: "Spells", rarity: "Legendary", probability: 5, image: "images/IMG_3379.jpg", description: "Avantage : renferme une magie glaciale rare capable de changer le cours d'un affrontement. Stratégie : conserve-la pour un moment critique afin de soutenir une stratégie de contrôle." },
    { id: 31, name: "Pyroclaste", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Common", probability: 40, image: "images/IMG_3331.jpg", description: "Avantage : apporte une puissance de feu simple et efficace. Stratégie : utilise-le pour exercer une pression constante et affaiblir les adversaires avant l'arrivée de tes cartes rares." },
    { id: 32, name: "Phénix Éternel", element: "feu", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3332.jpg", description: "Avantage : symbolise le renouveau et une puissance solaire exceptionnelle. Stratégie : garde-le pour relancer ton offensive lorsque le combat devient difficile." },
    { id: 33, name: "Gardienne des Sources", element: "eau", type: "Serviteurs de la Lumière", rarity: "Rare", probability: 25, image: "images/IMG_3335.jpg", description: "Avantage : apporte un soutien protecteur grâce à la magie des sources. Stratégie : place-la près de tes attaquants pour équilibrer l'équipe et prolonger sa résistance." },
    { id: 34, name: "Léviathan Noir", element: "eau", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3336.jpg", description: "Avantage : représente une menace massive venue des profondeurs. Stratégie : utilise-le pour dominer les affrontements prolongés et détourner l'attention de tes autres attaquants." },
    { id: 35, name: "Colosse de Pierre", element: "terre", type: "Minions", rarity: "Rare", probability: 25, image: "images/IMG_3337.jpg", description: "Avantage : mise sur la robustesse pour tenir face aux attaques ennemies. Stratégie : place-le en défense pendant que tes cartes offensives ciblent les faiblesses adverses." },
    { id: 36, name: "Racine Maudite", element: "terre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3338.jpg", description: "Avantage : associe la résistance terrestre à une magie sombre perturbatrice. Stratégie : utilise-la pour gêner les déplacements ennemis et préparer les attaques de tes serviteurs." },
    { id: 37, name: "Sylphe d'Argent", element: "air", type: "Serviteurs de la Lumière", rarity: "Common", probability: 40, image: "images/IMG_3339.jpg", description: "Avantage : offre une présence aérienne agile pour compléter ton équipe. Stratégie : utilise-la pour soutenir tes cartes rapides et maintenir une pression légère sur l'adversaire." },
    { id: 38, name: "Seigneur des Tempêtes", element: "air", type: "Serviteurs des Ténèbres", rarity: "Legendary", probability: 5, image: "images/IMG_3340.jpg", description: "Avantage : commande les vents et les tempêtes pour dominer le champ de bataille. Stratégie : joue-le comme pièce maîtresse d'une équipe agressive axée sur l'air." },
    { id: 39, name: "Faucon Foudroyant", element: "foudre", type: "Minions", rarity: "Rare", probability: 25, image: "images/IMG_3388.jpg", description: "Avantage : combine vitesse aérienne et énergie électrique. Stratégie : utilise-le pour surprendre les adversaires fragiles et soutenir les attaques rapides de ton équipe." },
    { id: 40, name: "Titan du Tonnerre", element: "foudre", type: "Serviteurs des Ténèbres", rarity: "Epic", probability: 15, image: "images/IMG_3341.jpg", description: "Avantage : apporte une force imposante associée à des attaques électriques. Stratégie : engage-le contre les ennemis résistants et accompagne-le de cartes capables de contrôler le terrain." },
    { id: 41, name: "Renard des Neiges", element: "glace", type: "Serviteurs de la Lumière", rarity: "Common", probability: 40, image: "images/IMG_3342.jpg", description: "Avantage : mise sur l'agilité et la magie du froid. Stratégie : utilise-le pour perturber les adversaires rapides et aider tes alliés à garder l'avantage." },
    { id: 42, name: "Reine des Glaciers", element: "glace", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3343.jpg", description: "Avantage : exerce un contrôle puissant sur la glace et le terrain. Stratégie : protège-la derrière tes défenseurs et utilise ses pouvoirs pour préparer une offensive décisive." },
    { id: 43, name: "Assassin du Néant", element: "ombre", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3344.jpg", description: "Avantage : excelle dans les attaques ciblées et les embuscades. Stratégie : concentre ses assauts sur les cartes de soutien ennemies pour désorganiser la stratégie adverse." },
    { id: 44, name: "Dévoreur d'Âmes", element: "ombre", type: "Minions", rarity: "Legendary", probability: 5, image: "images/IMG_3393.jpg", description: "Avantage : incarne une menace sombre destinée à affaiblir les forces adverses. Stratégie : conserve-le pour cibler un ennemi majeur et soutenir une offensive décisive." },
    { id: 45, name: "Paladin Solaire", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Epic", probability: 15, image: "images/IMG_3345.jpg", description: "Avantage : combine protection et puissance lumineuse. Stratégie : place-le en première ligne pour soutenir tes alliés et maintenir une défense stable pendant l'attaque." },
    { id: 46, name: "Oracle Céleste", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Rare", probability: 25, image: "images/IMG_3346.jpg", description: "Avantage : apporte une dimension stratégique grâce à sa sagesse céleste. Stratégie : utilise-le pour soutenir une équipe équilibrée et préparer tes prochains mouvements." },
    { id: 47, name: "Flamme du Chaos", element: "feu", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3347.jpg", description: "Avantage : libère une magie de feu imprévisible pour mettre les ennemis sous pression. Stratégie : lance ce sort lorsque plusieurs adversaires sont vulnérables." },
    { id: 48, name: "Vague Dévastatrice", element: "eau", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3348.jpg", description: "Avantage : déchaîne une vague magique pour perturber les forces adverses. Stratégie : utilise ce sort pour affaiblir la défense ennemie avant une attaque coordonnée." },
    { id: 49, name: "Séisme Ancestral", element: "terre", type: "Spells", rarity: "Legendary", probability: 5, image: "images/IMG_3381.jpg", description: "Avantage : libère une force terrestre capable de bouleverser le champ de bataille. Stratégie : réserve ce sort pour un affrontement décisif contre plusieurs adversaires." },
    { id: 50, name: "Souffle des Cieux", element: "air", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3382.jpg", description: "Avantage : invoque une puissance aérienne pour soutenir les stratégies rapides. Stratégie : lance ce sort avant une offensive menée par tes serviteurs de l'air." },
    { id: 51, name: "Chaîne de Foudre", element: "foudre", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3483.jpg", description: "Avantage : exploite l'électricité pour exercer une pression rapide sur l'ennemi. Stratégie : utilise ce sort contre une cible prioritaire et accompagne-le d'attaques électriques." },
    { id: 52, name: "Prison de Cristal", element: "glace", type: "Spells", rarity: "Rare", probability: 25, image: "images/IMG_3484.jpg", description: "Avantage : emprisonne symboliquement l'adversaire dans une défense glaciale. Stratégie : utilise ce sort pour neutraliser temporairement une menace et protéger tes attaquants." },
    { id: 53, name: "Malédiction Éternelle", element: "ombre", type: "Spells", rarity: "Epic", probability: 15, image: "images/IMG_3485.jpg", description: "Avantage : impose une pression durable grâce à la magie des ténèbres. Stratégie : lance ce sort sur un adversaire dangereux avant de concentrer les attaques de ton équipe." },
    { id: 54, name: "Lumière Purificatrice", element: "lumiere", type: "Spells", rarity: "Common", probability: 40, image: "images/IMG_3486.jpg", description: "Avantage : canalise une énergie lumineuse conçue pour contrer les forces obscures. Stratégie : utilise ce sort pour soutenir tes serviteurs de la Lumière face aux ténèbres." },
    { id: 55, name: "Mimique Vorace", element: "terre", type: "Minions", rarity: "Epic", probability: 15, image: "images/IMG_3487.jpg", description: "Avantage : surprend les adversaires grâce à son apparence trompeuse et sa nature prédatrice. Stratégie : utilise-le pour perturber les plans ennemis et créer une ouverture offensive." },
    { id: 56, name: "Corbeau Spectral", element: "ombre", type: "Minions", rarity: "Common", probability: 40, image: "images/IMG_3488.jpg", description: "Avantage : apporte une présence discrète et inquiétante sur le terrain. Stratégie : utilise-le en soutien pour accompagner les cartes d'ombre et mettre la pression sur les ennemis fragiles." },
    { id: 57, name: "Chevalier du Crépuscule", element: "feu", type: "Serviteurs des Ténèbres", rarity: "Rare", probability: 25, image: "images/IMG_3495.jpg", description: "Avantage : associe discipline guerrière et énergie ardente. Stratégie : place-le en première ligne pour soutenir tes attaques de feu et résister à la pression ennemie." },
    { id: 58, name: "Sirène des Profondeurs", element: "eau", type: "Serviteurs de la Lumière", rarity: "Epic", probability: 15, image: "images/IMG_3490.jpg", description: "Avantage : maîtrise la magie aquatique pour soutenir et perturber le combat. Stratégie : associe-la à des cartes défensives pour contrôler le rythme de l'affrontement." },
    { id: 59, name: "Dragon des Cieux", element: "air", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3495.jpg", description: "Avantage : domine les airs grâce à une puissance draconique exceptionnelle. Stratégie : protège-le pendant la préparation, puis utilise-le pour mener une offensive aérienne décisive." },
    { id: 60, name: "Arbitre du Destin", element: "lumiere", type: "Serviteurs de la Lumière", rarity: "Legendary", probability: 5, image: "images/IMG_3496.jpg", description: "Avantage : représente une force céleste capable d'influencer l'issue du combat. Stratégie : garde-le pour un moment stratégique où son soutien peut faire basculer l'affrontement." }
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