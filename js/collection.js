
document.addEventListener("DOMContentLoaded", function () {

    const grid = document.querySelector("#cards-grid");
    const filters = document.querySelectorAll(".filter-item");
    const details = document.querySelector("#details");
    const detailsCard = document.querySelector(".details-cart");

    let cards = JSON.parse(localStorage.getItem("mythoria-collection")) || [];
    let activeElement = "all";

    // Afficher les cartes
    function displayCards() {

        let filteredCards = cards.filter(function (card) {
            return activeElement === "all" ||
                card.element.toLowerCase() === activeElement.toLowerCase();
        });

        grid.innerHTML = "";

        if (filteredCards.length === 0) {
            grid.innerHTML = "<p>Aucune carte à afficher.</p>";
            return;
        }

        filteredCards.forEach(function (card) {

            const button = document.createElement("button");
            const image = document.createElement("img");

            button.type = "button";
            button.className = "collection-card";

            image.src = card.image;
            image.alt = card.name;

            button.appendChild(image);

            button.addEventListener("click", function () {
                showDetails(card);
            });

            grid.appendChild(button);
        });
    }

    // Afficher les détails d'une carte
    function showDetails(card) {

        detailsCard.innerHTML = `
            <img src="${card.image}" alt="${card.name}" class="details-image">
            <p class="details-rarity">${card.rarity || ""}</p>
            <h3 class="details-title">${card.name || ""}</h3>
            <p>Élément : ${card.element || ""}</p>
            <p class="details-description">${card.description || ""}</p>
        `;

        details.hidden = false;
    }

    // Filtrer les cartes par élément
    filters.forEach(function (button) {

        button.addEventListener("click", function () {

            activeElement = button.dataset.filterValue;

            filters.forEach(function (filter) {
                filter.classList.remove("active");
            });

            button.classList.add("active");

            details.hidden = true;

            displayCards();
        });
    });

    // Fermer les détails
    const closeButton = details.querySelector("button");

    closeButton.addEventListener("click", function () {
        details.hidden = true;
    });

    // Compter les cartes de chaque élément
    document.querySelectorAll("[data-element-count]").forEach(function (counter) {

        const element = counter.dataset.elementCount;

        counter.textContent = cards.filter(function (card) {
            return card.element.toLowerCase() === element.toLowerCase();
        }).length;
    });

    // Compter toutes les cartes
    document.querySelector("#count-all").textContent = cards.length;

    // Initialiser la page
    details.hidden = true;
    displayCards();

});
