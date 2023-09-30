const i=document.querySelector(".favorite-ingredients-list"),o=document.querySelector(".sorry-ingredients"),s=JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS"))??[];s.length?(o.classList.add("hidden"),c(s,i)):console.log("There is no ingredients in favorites");function c(t,n){const r=t.map(e=>`<li class="in-card">
        <h3 class="in-card-title">${e.title}</h3>
        <p class="in-card-alco">${e.alcohol}</p>
        <p class="in-card-descr">${e.description}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="./img/sprite.svg#trash"></use>
                    </svg></button></div>
</li>`).join("");n.insertAdjacentHTML("beforeend",r)}
