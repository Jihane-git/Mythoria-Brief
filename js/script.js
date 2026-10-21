const boosters = [
  /* ---------- BEGINNER PACK (50 DH, 5 cartes) ---------- */
  { id: 1, name: "Éveil des Braises", category: "Beginner Pack", element: "feu",
    description: "Faites vos premiers pas dans la fournaise : créatures de flammes, héros ardents et sorts incendiaires pour bâtir une collection brûlante.",
    price: 50, cardsCount: 5, image: "images/IMG_3349.jpg" },
  { id: 2, name: "Éveil des Marées", category: "Beginner Pack", element: "eau",
    description: "Laissez la marée vous porter vers vos premières cartes : créatures des profondeurs, serviteurs fluides et sorts de tempête.",
    price: 50, cardsCount: 5, image: "images/IMG_3350.jpg" },
  { id: 3, name: "Éveil des Racines", category: "Beginner Pack", element: "terre",
    description: "Un pack solide pour bien commencer : golems, héros gardiens et sorts de pierre pour fonder un deck inébranlable.",
    price: 50, cardsCount: 5, image: "images/IMG_3351.jpg" },
  { id: 4, name: "Éveil du Zéphyr", category: "Beginner Pack", element: "air",
    description: "Légères comme le vent, ces cartes vous ouvrent le ciel : bêtes ailées, héros agiles et sorts de bourrasque.",
    price: 50, cardsCount: 5, image: "images/IMG_3352.jpg" },
  { id: 5, name: "Éveil de l’Orage", category: "Beginner Pack", element: "foudre",
    description: "Sentez l’orage gronder ! Créatures électriques, héros fulgurants et sorts de foudre pour des débuts explosifs.",
    price: 50, cardsCount: 5, image: "images/IMG_3353.jpg" },
  { id: 6, name: "Éveil du Givre", category: "Beginner Pack", element: "glace",
    description: "Un souffle glacé pour vos premières parties : créatures gelées, héros impassibles et sorts de givre.",
    price: 50, cardsCount: 5, image: "images/IMG_3354.jpg" },
  { id: 7, name: "Éveil des Ombres", category: "Beginner Pack", element: "ombre",
    description: "Osez franchir le seuil des ténèbres : monstres rôdeurs, serviteurs sournois et sorts d’ombre vous attendent.",
    price: 50, cardsCount: 5, image: "images/IMG_3355.jpg" },
  { id: 8, name: "Éveil de l’Aube", category: "Beginner Pack", element: "lumiere",
    description: "La lumière guide vos premiers pas : héros radieux, serviteurs fidèles et sorts de protection pour bâtir votre légende.",
    price: 50, cardsCount: 5, image: "images/IMG_3356.jpg" },

  /* ---------- SUMMONING OF THE LEGENDS (120 DH, 150 DH pour Ombre et Lumière, 6 cartes) ---------- */
  { id: 9, name: "Légende d’Ignarok", category: "Summoning of the Legends", element: "feu",
    description: "Ignarok, le Phénix Cendré, sommeille dans ces cartes. De meilleures chances d’obtenir des cartes rares, épiques et légendaires embrasées.",
    price: 120, cardsCount: 6, image: "images/IMG_3357.jpg" },
  { id: 10, name: "Légende de Thalassyr", category: "Summoning of the Legends", element: "eau",
    description: "Réveillez les seigneurs des abysses : léviathans, héros des marées et sorts de déluge, avec de belles chances de légendaires.",
    price: 120, cardsCount: 6, image: "images/IMG_3358.jpg" },
  { id: 11, name: "Légende de Gorrundar", category: "Summoning of the Legends", element: "terre",
    description: "Le géant de pierre s’éveille. Titans, héros de granit et sorts telluriques pour les collectionneurs ambitieux.",
    price: 120, cardsCount: 6, image: "images/IMG_3359.jpg" },
  { id: 12, name: "Légende d’Aelithor", category: "Summoning of the Legends", element: "air",
    description: "Chevauchez la tempête avec le roi des cieux : cartes ailées, héros célestes et sorts de ciel, avec un taux de rareté amélioré.",
    price: 120, cardsCount: 6, image: "images/IMG_3360.jpg" },
  { id: 13, name: "Légende de Voltrak", category: "Summoning of the Legends", element: "foudre",
    description: "Voltrak déchire le ciel. Chaque carte peut cacher un éclair légendaire : créatures fulgurantes et sorts dévastateurs.",
    price: 120, cardsCount: 6, image: "images/IMG_3361.jpg" },
  { id: 14, name: "Légende de Frimaryl", category: "Summoning of the Legends", element: "glace",
    description: "Le dragon de givre vous attend. Des cartes rares et épiques figées dans la glace éternelle, et une chance de légendaire.",
    price: 120, cardsCount: 6, image: "images/IMG_3362.jpg" },
  { id: 15, name: "Légende de Nyxaroth", category: "Summoning of the Legends", element: "ombre",
    description: "Le seigneur des ombres exige un tribut : les plus puissantes créatures obscures et des sorts interdits, avec de grandes chances de légendaire.",
    price: 150, cardsCount: 6, image: "images/IMG_3363.jpg" },
  { id: 16, name: "Légende de Solariel", category: "Summoning of the Legends", element: "lumiere",
    description: "Solariel, gardienne de l’aube, vous offre le meilleur de la Lumière : héros radieux, cartes épiques et légendaires.",
    price: 150, cardsCount: 6, image: "images/IMG_3365.jpg" },

  /* ---------- DARK SUMMONING (100 DH, 6 cartes) ---------- */
  { id: 17, name: "Pacte des Cendres Maudites", category: "Dark Summoning", element: "feu",
    description: "Un pacte écrit dans la braise : démons enflammés, serviteurs calcinés et sorts interdits. Le feu a un prix.",
    price: 100, cardsCount: 6, image: "images/IMG_3366.jpg" },
  { id: 18, name: "Pacte des Abysses Noyés", category: "Dark Summoning", element: "eau",
    description: "Ce qui dort au fond de l’océan ne devrait pas être réveillé : monstres des profondeurs, serviteurs engloutis et sorts de noyade.",
    price: 100, cardsCount: 6, image: "images/IMG_3367.jpg" },
  { id: 19, name: "Pacte des Ossuaires", category: "Dark Summoning", element: "terre",
    description: "Les morts creusent leur propre sortie : squelettes, golems d’os et sorts de nécromancie dans un pack macabre.",
    price: 100, cardsCount: 6, image: "images/IMG_3368.jpg" },
  { id: 20, name: "Pacte des Vents Hurlants", category: "Dark Summoning", element: "air",
    description: "Écoutez les cris dans la tempête : spectres, harpies et sorts de malédiction portés par le vent noir.",
    price: 100, cardsCount: 6, image: "images/IMG_3369.jpg" },
  { id: 21, name: "Pacte de la Foudre Noire", category: "Dark Summoning", element: "foudre",
    description: "Une foudre qui n’éclaire rien : créatures corrompues, serviteurs électriques et sorts interdits.",
    price: 100, cardsCount: 6, image: "images/IMG_3370.jpg" },
  { id: 22, name: "Pacte du Gel Éternel", category: "Dark Summoning", element: "glace",
    description: "Le froid des tombes vous appelle : revenants gelés, monstres de givre et sorts qui glacent le sang.",
    price: 100, cardsCount: 6, image: "images/IMG_3371.jpg" },
  { id: 23, name: "Pacte des Âmes Perdues", category: "Dark Summoning", element: "ombre",
    description: "Des âmes en peine murmurent votre nom : monstres, serviteurs des Ténèbres et sorts interdits vous attendent.",
    price: 100, cardsCount: 6, image: "images/IMG_3372.jpg" },
  { id: 24, name: "Pacte de l’Aube Souillée", category: "Dark Summoning", element: "lumiere",
    description: "Quand la lumière tombe, elle emporte tout avec elle : anges déchus, serviteurs corrompus et sorts sacrilèges.",
    price: 100, cardsCount: 6, image: "images/IMG_3373.jpg" },

  /* ---------- LUCKY PACK (composition aléatoire, tous éléments) ---------- */
  { id: 25, name: "Dé du Destin", category: "Lucky Pack", element: "tous",
    description: "Un seul lancer, trois cartes. Le destin tranche : une carte commune… ou une carte exceptionnelle ?",
    price: 60, cardsCount: 3, image: "images/IMG_3374.jpg" },
  { id: 26, name: "Étoile Filante", category: "Lucky Pack", element: "tous",
    description: "Faites un vœu : elle traverse la nuit en laissant derrière elle une carte rare… ou mieux.",
    price: 70, cardsCount: 4, image: "images/IMG_3375.jpg" },
  { id: 27, name: "Coffre du Hasard", category: "Lucky Pack", element: "tous",
    description: "Un coffre scellé dont personne ne connaît le contenu. Ouvrez-le pour découvrir de quoi vous surprendre.",
    price: 80, cardsCount: 5, image: "images/IMG_3376.jpg" },
  { id: 28, name: "Calice de la Chance", category: "Lucky Pack", element: "tous",
    description: "Buvez la chance à la source : créatures, héros, serviteurs et sorts de tous les éléments, mélangés au gré du sort.",
    price: 90, cardsCount: 6, image: "images/IMG_3377.jpg" },
  { id: 29, name: "Écrin du Hasard", category: "Lucky Pack", element: "tous",
    description: "Pour les audacieux : un écrin garni de cartes des huit éléments, avec une chance accrue de trouver une pépite.",
    price: 100, cardsCount: 7, image: "images/IMG_3378.jpg" },
  { id: 30, name: "Relique Inconnue", category: "Lucky Pack", element: "tous",
    description: "La relique la plus mystérieuse du royaume : huit cartes aléatoires, et peut-être une légende cachée parmi elles.",
    price: 120, cardsCount: 8, image: "images/IMG_3379.jpg" }
];

const productList = document.querySelector(".list-carts");
const cartList = document.querySelector("#items-panier");
const totalElement = document.querySelector("#total");
const cart = [];

function renderBoosters() {
    productList.innerHTML = boosters.map((booster) => `
        <article class="booster-item" data-id="${booster.id}">
            <img src="${booster.image}" alt="Illustration du booster ${booster.name}" loading="lazy" width="300px" height="100px">
            <div class="booster-info">
                <p class="booster-element">${booster.category} · ${booster.element}</p>
                <h3>${booster.name}</h3>
                <p class="booster-description">${booster.description}</p>
                <p class="booster-details">${booster.cardsCount} cartes</p>
                <div class="booster-buy">
                    <strong>${booster.price} DH</strong>
                    <button type="button" class="ajouter" data-id="${booster.id}">Ajouter au panier</button>
                </div>
            </div>
        </article>
    `).join("");
}


function renderCart() {
    cartList.innerHTML = cart.map((item, index) => `
        <li class="cart-item">
            <span>${item.name}</span>
            <span>${item.price} DH</span>
            <button type="button" class="supprimer" data-index="${index}" aria-label="Supprimer ${item.name} du panier">Retirer</button>
        </li>
    `).join("");

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = total;
}


productList.addEventListener("click", (event) => {
    const button = event.target.closest(".ajouter");
    if (!button) return;

    const booster = boosters.find((item) => item.id === Number(button.dataset.id));
    if (!booster) return;

    cart.push(booster);
    renderCart();
});

cartList.addEventListener("click", (event) => {
    const button = event.target.closest(".supprimer");
    if (!button) return;

    cart.splice(Number(button.dataset.index), 1);
    renderCart();
});

renderBoosters();
renderCart();