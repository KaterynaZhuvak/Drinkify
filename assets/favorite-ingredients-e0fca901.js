import{b}from"./popupingredients-643c8a72.js";import{P as v}from"./tui-pagination-4b0de168.js";const a=document.querySelector(".favorite-ingredients-list"),u=document.querySelector(".sorry-ingredients"),g=document.querySelector(".pagination-main"),n=JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS"))??[];console.log(n);let f=1,l=8;screen.width>=1280&&(l=9);u.classList.add("hidden");c(n,a);n.length||u.classList.remove("hidden");a.addEventListener("click",y);function c(i,t){t.innerHTML="",g.innerHTML="",i.length<=l?t.innerHTML=i.map(s=>{let e="Alcoholic";return s.abv==="0"&&(e="Non-alcoholic"),`<li class="in-card" data-id=${s.id}>
        <h3 class="in-card-title">${s.title}</h3>
        <p class="in-card-alco">${e}</p>
        <p class="in-card-descr">${s.description||"No data"}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
        <use href="./img/sprite.svg#trash"></use>
        </svg></button></div>
</li>`}).join(""):(p(n,a,l,f),h(n,g,l))}function p(i,t,s,e){t.innerHTML="",e--;let o=s*e,r=o+s,d=i.slice(o,r);return c(d,a)}function h(i,t,s){t.innerHTML="";const e={totalItems:i.length,itemsPerPage:s,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnStyle">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected btnStyleActive">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new v(g,e).on("beforeMove",r=>{const{page:d}=r;p(n,a,l,d)})}function y(i){if(i.target.classList.contains("btn-learn-more")){const t=m(i.target);b.create(`<div id="modal-ingredients" class="modal-in">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="./img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${t.id}"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title">${t.title}</h2>
          <p class="kind-in">${t.type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-in">${t.description||"No data"}</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${t.type||"No data"}</li>
            <li class="ingredients-description">Country of origin: ${t.country||"No data"}</li>
            <li class="ingredients-description">Alcohol by volume: ${t.abv||"No data"}</li>
            <li class="ingredients-description">Flavour: ${t.flavour||"No data"}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button class="btn-in remove-btn">REMOVE FROM FAVORITE</button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".remove-btn").addEventListener("click",S),e.element().querySelector(".remove-btn").onclick=e.close}}).show()}(i.target.closest(".btn-remove")||i.target.closest(".btn-in"))&&(I(i),n.length||u.classList.remove("hidden"))}function m(i){const t=i.closest(".in-card").dataset.id;return n.find(({id:s})=>s===t)}function I(i){const t=m(i.target),s=n.findIndex(({id:e})=>e===t.id);n.splice(s,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(n)),c(n,a)}function S(i){const t=i.target.closest(".descripe-ingredients").dataset.id,s=n.find(({id:o})=>o===t),e=n.findIndex(({id:o})=>o===s.id);n.splice(e,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(n)),c(n,a)}
