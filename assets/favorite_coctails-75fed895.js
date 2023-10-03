import{f as g,b as E,s as u,o as _}from"./popupingredients-7d50fba2.js";const v="favoriteCocktails",y=document.querySelector(".cardlist"),b="cocktails/lookup/",S="id",r=JSON.parse(localStorage.getItem(v))??[];let m,l;y.addEventListener("click",A);y.addEventListener("click",O);async function A(t){if(!t.target.classList.contains("cardlist-learn"))return;l=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await g(b,S,a).then(o=>{const{_id:c,drinkThumb:s,instructions:i,drink:e,ingredients:f,description:n}=o[0];m={_id:c,drinkThumb:s,description:n,drink:e};let w=f.map(d=>`<li data-id="${d.ingredientId}" class="text item-card"><a href="#" class="ingredient-btn">${d.measure||""}${d.title}</a></li>`).join("");R(a,w,e,i,s)})}function R(t,a,o,c,s){E.create(`<div class="container-popup id-for-del" data-id="${t}">
  <button class="popup-close-btn close-cocktail-modal-x">
    <svg class="popup-close-btn-icon">
      <use href="${u}#cross"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="${s}" alt="${o}" onerror="this.onerror=null;this.src='img/rafiki.jpg';"/></div>
    <div>
      <h2 class="name">${o}</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card ingredients-list">${a}</ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card">
   ${c}
  </p>
  <button type="button" class="button-card favorite add-to-fav-cockt" data-id="${t}">
    add to favorite
  </button>
   <button type="button" class="visually-hidden button-card favorite remove-from-fav-cockt" data-id="${t}">
    Remove from favorite
  </button>
   <button type="button" class="button-card back close-cocktail-modal-back">Back</button>
</div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".add-to-fav-cockt").addEventListener("click",k),e.element().querySelector(".remove-from-fav-cockt").addEventListener("click",h),x(e)},onClose:e=>{e.element().querySelector(".add-to-fav-cockt").removeEventListener("click",k),e.element().querySelector(".remove-from-fav-cockt").removeEventListener("click",h)}}).show(),document.querySelector(".ingredients-list").addEventListener("click",_)}function x(t){r.find(({_id:o})=>o===t.element().querySelector(".container-popup").dataset.id)&&(t.element().querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),t.element().querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"))}async function O(t){if(t.preventDefault(),t.target.classList.contains("add-to-fav-cockt-headt")||t.target.closest(".add-to-fav-cockt-headt")){l=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await g(b,S,a).then(o=>{const{_id:c,drinkThumb:s,drink:i,description:e}=o[0];m={_id:c,drinkThumb:s,description:e,drink:i}}),L()}else if(t.target.classList.contains("remove-from-fav-cockt-bin")||t.target.closest(".remove-from-fav-cockt-bin"))l=t.target.closest(".cardlist-item"),$(t);else return}function k(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"),L()}function L(){l.querySelector(".add-to-fav-cockt-headt").classList.add("visually-hidden"),l.querySelector(".remove-from-fav-cockt-bin").classList.remove("visually-hidden"),r.push(m),localStorage.setItem(v,JSON.stringify(r))}function h(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.remove("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.add("visually-hidden"),$(t)}function $(t){l.querySelector(".add-to-fav-cockt-headt").classList.remove("visually-hidden"),l.querySelector(".remove-from-fav-cockt-bin").classList.add("visually-hidden");const a=r.findIndex(({_id:o})=>o===t.target.closest(".id-for-del").dataset.id);r.splice(a,1),localStorage.setItem(v,JSON.stringify(r)),(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&C(r,I)}const D="/Drinkify/assets/rafiki-b0fd8af4.jpg";function H({drinkThumb:t,drink:a,description:o,_id:c}){let s,i;return q.find(({_id:n})=>n===c)?(s="visually-hidden",i=""):(s="",i="visually-hidden"),`<li class="cardlist-item id-for-del" data-id=${c}>
        <img src="${t}" class="cardlist-img" alt="${a}" onerror="this.onerror=null;this.src='${D}';" width=300>
        <h3 class="cardlist-drink">${a}</h3>
        <p class="cardlist-descr">${o}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button>
        <button class="cardlist-fav add-to-fav-cockt-headt ${s}">
        <svg class="cardlist-svg" weight="18" height="18">
        <use href="${u}#heart"></use>
        </svg>
        </button>
        <button class="cardlist-fav remove-from-fav-cockt-bin ${i}">
        <svg class="cardlist-svg" weight="18" height="18">
         <use href="${u}#trash"></use>
        </svg>
        </button>
        </div>
        </li>`}const I=document.querySelector(".cardlist"),p=document.querySelector(".plug"),T="favoriteCocktails",q=JSON.parse(localStorage.getItem(T))??[];C(q,I);function C(t,a){(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&(t.length?p.classList.add("visually-hidden"):p.classList.remove("visually-hidden"));const o=t.map(c=>H(c)).join("");a.innerHTML=o}export{H as c};
