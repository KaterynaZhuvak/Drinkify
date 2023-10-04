import{s as f,P as h,b as y,N as I}from"./tui-pagination-2ff884e0.js";const l=document.querySelector(".favorite-ingredients-list"),u=document.querySelector(".sorry-ingredients"),g=document.querySelector(".tui-pagination"),s=JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS"))??[];let S=1,a=6,m=4;screen.width>=1280&&(m=7);u.classList.add("hidden");c(s,l);s.length||u.classList.remove("hidden");l.addEventListener("click",E);function c(i,e){e.innerHTML="",g.innerHTML="",i.length<=a?e.innerHTML=i.map(n=>{let t="Alcoholic";return n.abv==="0"&&(t="Non-alcoholic"),`<li class="in-card" data-id=${n.id}>
        <h3 class="in-card-title">${n.title}</h3>
        <p class="in-card-alco">${t}</p>
        <p class="in-card-descr">${n.description||"-"}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="${f}#trash"></use>
                    </svg></button></div>
</li>`}).join(""):(b(s,l,a,S),k(s,g,a))}function b(i,e,n,t){e.innerHTML="",t--;let o=n*t,r=o+n,d=i.slice(o,r);return c(d,l)}function k(i,e,n){e.innerHTML="";const t={totalItems:i.length,itemsPerPage:n,visiblePages:m,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnStyle">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected btnStyleActive">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new h(g,t).on("beforeMove",r=>{const{page:d}=r;b(s,l,a,d)})}function E(i){if(i.target.classList.contains("btn-learn-more")){const e=v(i.target);y.create(`<div id="modal-ingredients" class="modal-in">
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
          <p class="main-description-in">${e.description||"-"}</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${e.type||"-"}</li>
            <li class="ingredients-description">Country of origin: ${e.country||"-"}</li>
            <li class="ingredients-description">Alcohol by volume: ${e.abv||"-"}</li>
            <li class="ingredients-description">Flavour: ${e.flavour||"-"}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button class="btn-in remove-btn">REMOVE FROM FAVORITE</button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,{onShow:t=>{t.element().querySelector(".close-cocktail-modal-back").onclick=t.close,t.element().querySelector(".close-cocktail-modal-x").onclick=t.close,t.element().querySelector(".remove-btn").addEventListener("click",p),t.element().querySelector(".remove-btn").onclick=t.close},onClose:t=>{t.element().querySelector(".remove-btn").removeEventListener("click",p)}}).show()}(i.target.closest(".btn-remove")||i.target.closest(".btn-in"))&&(N(i),s.length||u.classList.remove("hidden"))}function v(i){const e=i.closest(".in-card").dataset.id;return s.find(({id:n})=>n===e)}function N(i){const e=v(i.target),n=s.findIndex(({id:t})=>t===e.id);I.Notify.info(`Ingredient ${s[n].title} removed from favorites`),s.splice(n,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(s)),c(s,l)}function p(i){const e=i.target.closest(".descripe-ingredients").dataset.id,n=s.find(({id:o})=>o===e),t=s.findIndex(({id:o})=>o===n.id);s.splice(t,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(s)),c(s,l)}