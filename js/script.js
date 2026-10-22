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

const burger = document.querySelector("#burger");
const navLinks = document.querySelector("#nav-links");

function setMenu(open) {
    if (!burger || !navLinks) return;
    navLinks.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}

if (burger && navLinks) {
    burger.addEventListener("click", () => {
        const willOpen = !navLinks.classList.contains("is-open");
        setMenu(willOpen);
        if (willOpen) closeCart();
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.closest("a")) setMenu(false);
    });

    window.matchMedia("(min-width: 851px)").addEventListener("change", (e) => {
        if (e.matches) setMenu(false);
    });
}

/* =========================================================
   3. PANIER (toutes les pages, sauvegardé entre les pages)
   ========================================================= */
const cartList = document.querySelector("#items-panier");
const totalElement = document.querySelector("#total");
const cartCount = document.querySelector("#cart-count");
const cartCountLabel = document.querySelector("#cart-count-label");
const cartPanel = document.querySelector(".cart-panel");
const cartToggle = document.querySelector(".cart-toggle");

let cart = JSON.parse(localStorage.getItem("mythoria-cart")) || [];

function saveCart() {
    localStorage.setItem("mythoria-cart", JSON.stringify(cart));
}

function renderCart() {
    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <li class="cart-empty">
                <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 12h7l6 30h27l7-22H18M25 51a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm20 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="m34 17 2-3m7 2 2-4m-17 7 1-3"/></svg>
                <p>Votre panier est vide</p>
                <span>Les boosters que vous choisirez apparaîtront ici.</span>
            </li>`;
    } else {
        cartList.innerHTML = cart.map((item, index) => `
            <li class="cart-item">
                <img src="${item.image}" alt="">
                <span class="cart-item-name">${item.name}<small>${item.cardsCount} cartes</small></span>
                <strong>${item.price} DH</strong>
                <button type="button" class="supprimer" data-index="${index}" aria-label="Retirer ${item.name}">×</button>
            </li>`).join("");
    }

    if (totalElement) totalElement.textContent = cart.reduce((sum, item) => sum + item.price, 0);
    if (cartCount) cartCount.textContent = cart.length;
    if (cartCountLabel) cartCountLabel.textContent = cart.length;
}

function openCart() {
    if (!cartPanel || !cartToggle) return;
    cartPanel.classList.add("is-open");
    cartToggle.setAttribute("aria-expanded", "true");
}

function closeCart() {
    if (!cartPanel || !cartToggle) return;
    cartPanel.classList.remove("is-open");
    cartToggle.setAttribute("aria-expanded", "false");
}

function addToCart(booster) {
    cart.push(booster);
    saveCart();
    renderCart();
    openCart();
}

if (cartToggle && cartPanel) {
    cartToggle.addEventListener("click", () => {
        if (cartPanel.classList.contains("is-open")) {
            closeCart();
        } else {
            openCart();
            setMenu(false);
        }
    });
}

if (cartList) {
    cartList.addEventListener("click", (e) => {
        const removeButton = e.target.closest(".supprimer");
        if (!removeButton) return;
        cart.splice(Number(removeButton.dataset.index), 1);
        saveCart();
        renderCart();
    });
}

renderCart();

/* =========================================================
   4. FERMETURES GLOBALES (clic en dehors, Échap)
   ========================================================= */
document.addEventListener("click", (e) => {
    if (!e.target.closest(".cart-menu")) closeCart();
    if (!e.target.closest(".navbar")) setMenu(false);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        setMenu(false);
        closeCart();
    }
});

/* =========================================================
   5. PAGE BOUTIQUE (seulement si .list-carts existe)
   ========================================================= */
const productList = document.querySelector(".list-carts");

if (productList) {
    const labelFor = (value) => ({
        feu: "Feu", eau: "Eau", terre: "Terre", air: "Air",
        foudre: "Foudre", glace: "Glace", ombre: "Ombre",
        lumiere: "Lumière", tous: "Tous les éléments"
    }[value] || value);

    productList.innerHTML = boosters.map((booster) => `
        <article class="booster-product">
            <p class="booster-price">${booster.price} DH</p>
            <div class="booster-scene" role="button" tabindex="0" aria-label="Afficher les détails de ${booster.name}" aria-expanded="false">
                <div class="booster-flipper">
                    <div class="booster-face booster-front">
                        <img src="${booster.image}" alt="" loading="lazy">
                        <div class="front-shade"></div>
                        <div class="pack-brand"><span class="brand-seal">✦</span> MYTHORIA</div>
                        <div class="front-copy">
                            <p>${booster.category}</p>
                            <h2>${booster.name}</h2>
                            <span class="element-tag">${labelFor(booster.element)}</span>
                        </div>
                        <span class="cards-count">${booster.cardsCount} cartes</span>
                    </div>
                    <div class="booster-face booster-back">
                        <p class="back-category">${booster.category}</p>
                        <h2>${booster.name}</h2>
                        <p class="back-element">Élément : ${labelFor(booster.element)}</p>
                        <p class="back-count">${booster.cardsCount} cartes dans ce pack</p>
                        <p class="booster-description">${booster.description}</p>
                        <strong class="back-price">${booster.price} DH</strong>
                        <button type="button" class="ajouter" data-id="${booster.id}">Ajouter au panier</button>
                        <span class="tap-hint">Cliquez pour retourner</span>
                    </div>
                </div>
            </div>
        </article>
    `).join("");

    productList.addEventListener("click", (event) => {
        const addButton = event.target.closest(".ajouter");
        if (addButton) {
            const booster = boosters.find((b) => b.id === Number(addButton.dataset.id));
            if (booster) addToCart(booster);
            return;
        }

        const scene = event.target.closest(".booster-scene");
        if (scene) {
            const flipped = scene.classList.toggle("is-flipped");
            scene.setAttribute("aria-expanded", flipped);
        }
    });

    productList.addEventListener("keydown", (event) => {
        const scene = event.target.closest(".booster-scene");
        if (scene && !event.target.closest(".ajouter") && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            scene.click();
        }
    });
}

/* =========================================================
   6. PAGE D'ACCUEIL (seulement si l'élément existe)
   ========================================================= */
const homeLegendaires = document.querySelector("#home-legendaires");

if (homeLegendaires) {
    /* ton code des cartes légendaires ici (s'il est encore en JS) */
}