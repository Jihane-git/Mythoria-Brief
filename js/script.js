const boosters = [
  /* ---------- BEGINNER PACK (50 DH, 5 cartes) ---------- */
  { id: 1, name: "Éveil des Braises", category: "Beginner Pack", element: "feu",
    description: "Faites vos premiers pas dans la fournaise : créatures de flammes, héros ardents et sorts incendiaires pour bâtir une collection brûlante.",
    price: 50, cardsCount: 5, image: "images/mystery-02-sablier.svg"},
  { id: 2, name: "Éveil des Marées", category: "Beginner Pack", element: "eau",
    description: "Laissez la marée vous porter vers vos premières cartes : créatures des profondeurs, serviteurs fluides et sorts de tempête.",
    price: 50, cardsCount: 5, image: "images/mystery-01-grimoire.svg" },
  { id: 3, name: "Éveil des Racines", category: "Beginner Pack", element: "terre",
    description: "Un pack solide pour bien commencer : golems, héros gardiens et sorts de pierre pour fonder un deck inébranlable.",
    price: 50, cardsCount: 5, image: "images/mystery-03-oeuf.svg" },
  /* ---------- SUMMONING OF THE LEGENDS (120 DH, 150 DH pour Ombre et Lumière, 6 cartes) ---------- */
  { id: 4, name: "Légende d’Ignarok", category: "Summoning of the Legends", element: "feu",
    description: "Ignarok, le Phénix Cendré, sommeille dans ces cartes. De meilleures chances d’obtenir des cartes rares, épiques et légendaires embrasées.",
    price: 120, cardsCount: 6, image: "images/mystery-04-porte.svg" },
  { id: 5, name: "Légende de Thalassyr", category: "Summoning of the Legends", element: "eau",
    description: "Réveillez les seigneurs des abysses : léviathans, héros des marées et sorts de déluge, avec de belles chances de légendaires.",
    price: 120, cardsCount: 6, image: "images/mystery-05-masque.svg" },
  /* ---------- DARK SUMMONING (100 DH, 6 cartes) ---------- */
  { id: 6, name: "Pacte des Cendres Maudites", category: "Dark Summoning", element: "feu",
    description: "Un pacte écrit dans la braise : démons enflammés, serviteurs calcinés et sorts interdits. Le feu a un prix.",
    price: 100, cardsCount: 6, image: "images/mystery-06-cristal.svg" },
  { id: 7, name: "Pacte des Abysses Noyés", category: "Dark Summoning", element: "eau",
    description: "Ce qui dort au fond de l’océan ne devrait pas être réveillé : monstres des profondeurs, serviteurs engloutis et sorts de noyade.",
    price: 100, cardsCount: 6, image: "images/mystery-07-coffre.svg" },
  { id: 8, name: "Pacte des Ossuaires", category: "Dark Summoning", element: "terre",
    description: "Les morts creusent leur propre sortie : squelettes, golems d’os et sorts de nécromancie dans un pack macabre.",
    price: 100, cardsCount: 6, image: "images/mystery-08-lanterne.svg" },
  /* ---------- LUCKY PACK (composition aléatoire, tous éléments) ---------- */
  { id: 9, name: "Dé du Destin", category: "Lucky Pack", element: "tous",
    description: "Un seul lancer, trois cartes. Le destin tranche : une carte commune… ou une carte exceptionnelle ?",
    price: 60, cardsCount: 3, image: "images/mystery-10-calice.svg" },
  { id: 10, name: "Étoile Filante", category: "Lucky Pack", element: "tous",
    description: "Faites un vœu : elle traverse la nuit en laissant derrière elle une carte rare… ou mieux.",
    price: 70, cardsCount: 4, image: "images/mystery-09-anneau.svg" },
  
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


/*  PANIER (toutes les pages, sauvegardé entre les pages) */
const cartList = document.querySelector("#items-panier");
const totalElement = document.querySelector("#total");
const cartCount = document.querySelector("#cart-count");
const cartCountLabel = document.querySelector("#cart-count-label");
const cartPanel = document.querySelector(".cart-panel");
const cartToggle = document.querySelector(".cart-toggle");
const validerButton = document.querySelector(".valider-button");
const boostersRoom = document.querySelector(".boosters-room")

let cart = JSON.parse(localStorage.getItem("mythoria-cart")) || [];

let MyBoosters = JSON.parse(localStorage.getItem("MyBoosters")) || []


function renderCartPanier(){
  if (!boostersRoom) return ;

  if(MyBoosters.length === 0){
    boostersRoom.innerHTML = `
    <li class="cartBoosters-item-vide">
      <p> vous n'avez aucun booster!! </p>
    </li>
    `; 
  } else{ 
    boostersRoom.innerHTML = MyBoosters.map((item, index)=> `
      <article class="booster-p-items">
            <div class="booster-p-scene " role="button"  tabindex="0" aria-label="Afficher les détails de ${item.name}" aria-expanded="false">
                <div class="booster-p-flipper">
                    <div class="booster-p-image">
                        <img src="${item.image}" alt="" loading="lazy">
                    </div>
                    <div class="booster-p-item">
                        <p class="p-category">${item.category}</p>
                        <h2>${item.name}</h2>
                        <p class="p-element">Élément : ${item.element}</p>
                        <p class="p-count">${item.cardsCount} cartes dans ce pack</p>
                        <p class="p-description">${item.description}</p>
                        <button type="button" class="openBooster" data-index="${index}">Ouvrir le booster</button>
                    </div>
                </div>
            </div>
        </article>

    ` ).join("");
    
  }

}

function saveCart() {
    localStorage.setItem("mythoria-cart", JSON.stringify(cart));
}

function saveMyBoosters(){
  localStorage.setItem("MyBoosters", JSON.stringify(MyBoosters))
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
                <img class="image-panier" src="${item.image}" alt="">
                <span class="cart-item-name">${item.name}<small>${item.cardsCount} cartes</small></span>
                <strong>${item.price} DH</strong>
                <button type="button" class="supprimer" data-index="${index}" aria-label="Retirer ${item.name}">X</button>
            </li>  

            `).join("");
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

function validerPanier(){
  if(cart.length === 0){
    return
  }
  
  MyBoosters.push(...cart) 
   
  saveMyBoosters()

  cart = [];
  saveCart();
  renderCart();
  renderCartPanier()


    alert("Vos boosters ajouter dans votre collection, open *opening chambre* pour voir vos carts !"); 

}
if (validerButton){
validerButton.addEventListener("click", validerPanier);
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
        e.stopPropagation();
        cart.splice(Number(removeButton.dataset.index), 1);
        saveCart();
        renderCart();
    });
}


document.addEventListener("click", (e) => {

    if (!e.target.closest(".cart-menu")) {
        closeCart();
    }

    if (!e.target.closest(".navbar")) {
        setMenu(false);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        setMenu(false);
        closeCart();
    }
});

/*  PAGE BOUTIQUE */
const productList = document.querySelector(".list-carts");

if (productList) {
    const labelFor = (value) => ({
        feu: "Feu", eau: "Eau", terre: "Terre", air: "Air",
        foudre: "Foudre", glace: "Glace", ombre: "Ombre",
        lumiere: "Lumière", tous: "Tous les éléments"
    }[value] || value);

    productList.innerHTML = boosters.map((booster) => `
        <article class="booster-product">
            
            <div class="booster-scene" role="button" tabindex="0" aria-label="Afficher les détails de ${booster.name}" aria-expanded="false">
                <div class="booster-flipper">
                    <div class="booster-face booster-front">
                        <img src="${booster.image}" alt="" loading="lazy">
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
                                               
renderCart();
renderCartPanier();