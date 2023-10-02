import{b as d}from"./popupingredients-2138883f.js";const c=document.querySelector(".favorite-ingredients-list"),l=document.querySelector(".sorry-ingredients"),i=JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS"))??[];console.log(i);l.classList.add("hidden");r(i,c);i.length||l.classList.remove("hidden");c.addEventListener("click",g);function r(n,e){const s=n.map(t=>{let o="Alcoholic";return t.abv==="0"&&(o="Non-alcoholic"),`<li class="in-card" data-id=${t.id}>
        <h3 class="in-card-title">${t.title}</h3>
        <p class="in-card-alco">${o}</p>
        <p class="in-card-descr">${t.description||"No data"}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="./img/sprite.svg#trash"></use>
                    </svg></button></div>
</li>`}).join("");e.innerHTML=s}function g(n){if(n.target.classList.contains("btn-learn-more")){const e=a(n.target);d.create(`<div id="modal-ingredients" class="modal-in">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="./img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${e.id}"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title">${e.title}</h2>
          <p class="kind-in">${e.type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-in">${e.description||"No data"}</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${e.type||"No data"}</li>
            <li class="ingredients-description">Country of origin: ${e.country||"No data"}</li>
            <li class="ingredients-description">Alcohol by volume: ${e.abv||"No data"}</li>
            <li class="ingredients-description">Flavour: ${e.flavour||"No data"}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button class="btn-in remove-btn">REMOVE FROM FAVORITE</button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,{onShow:t=>{t.element().querySelector(".close-cocktail-modal-back").onclick=t.close,t.element().querySelector(".close-cocktail-modal-x").onclick=t.close,t.element().querySelector(".remove-btn").addEventListener("click",u),t.element().querySelector(".remove-btn").onclick=t.close}}).show()}(n.target.closest(".btn-remove")||n.target.closest(".btn-in"))&&(m(n),i.length||l.classList.remove("hidden"))}function a(n){const e=n.closest(".in-card").dataset.id;return i.find(({id:s})=>s===e)}function m(n){const e=a(n.target),s=i.findIndex(({id:t})=>t===e.id);i.splice(s,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(i)),r(i,c)}function u(n){const e=n.target.closest(".descripe-ingredients").dataset.id,s=i.find(({id:o})=>o===e),t=i.findIndex(({id:o})=>o===s.id);i.splice(t,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(i)),r(i,c)}
