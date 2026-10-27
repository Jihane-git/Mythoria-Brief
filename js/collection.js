    const grid = document.querySelector("#cards-grid");
    const filters = document.querySelectorAll(".filter-item");
    const details = document.querySelector("#details");
    const detailsCard = document.querySelector("#details-cart");
    const closeButton = document.querySelector("#close-details");
    const search = document.querySelector("#card-search");
    const sort = document.querySelector("#card-sort");
    const results = document.querySelector("#results-label");

    let cards = JSON.parse(localStorage.getItem("mythoria-collection")) || [];
    let activeElement = "all";

    function displayCards() {
        let filteredCards = cards.filter(function (card) {

            let elementMatch = activeElement === "all" ||
                card.element.toLowerCase() === activeElement;

            let nameMatch = card.name.toLowerCase().includes(
                search.value.toLowerCase()
            );

            return elementMatch && nameMatch;
        });

        if (sort.value === "name") {
            filteredCards.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort.value === "element") {
            filteredCards.sort((a, b) => a.element.localeCompare(b.element));
        } else {
            filteredCards.sort((a, b) => {
                const rarity = {
                    common: 1,
                    rare: 2,
                    epic: 3,
                    legendary: 4
                };

                return (rarity[b.rarity.toLowerCase()] || 0) -
                       (rarity[a.rarity.toLowerCase()] || 0);
            });
        }

        grid.innerHTML = "";

        results.textContent = filteredCards.length + " carte(s)";

        if (filteredCards.length === 0) {
            grid.innerHTML = "<p>Aucune carte à afficher.</p>";
            return;
        }

        filteredCards.forEach(function (card) {
            const button = document.createElement("button");
            const image = document.createElement("img");

            button.className = "collection-card";
            button.type = "button";

            image.src = card.image;
            image.alt = card.name;

            button.appendChild(image);

            button.addEventListener("click", function () {
                showDetails(card);
            });

            grid.appendChild(button);
        });
    }

    function showDetails(card) {
        detailsCard.innerHTML = `
            <img src="${card.image}" alt="${card.name}" class="details-image">
            <p class="details-rarity">${card.rarity}</p>
            <h3 class="details-title">${card.name}</h3>
            <p>Élément : ${card.element}</p>
            <p class="details-description">${card.description || ""}</p>
        `;

        details.hidden = false;
    }