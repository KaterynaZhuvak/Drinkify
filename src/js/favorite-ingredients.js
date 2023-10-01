const list = document.querySelector(".favorite-ingredients-list");
const sorryImg = document.querySelector(".sorry-ingredients");
const favorite = JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS")) ?? [];

if (favorite.length) {
    sorryImg.classList.add("hidden");
    renderMarkup(favorite, list);
} else { console.log("There is no ingredients in favorites"); }

function renderMarkup(arr, container) {
    const markup = arr.map(
        (card) => `<li class="in-card">
        <h3 class="in-card-title">${card.title}</h3>
        <p class="in-card-alco">${card.alcohol}</p>
        <p class="in-card-descr">${card.description}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="./img/sprite.svg#trash"></use>
                    </svg></button></div>
</li>`  
    )
    .join("");

  container.insertAdjacentHTML("beforeend", markup);
};

