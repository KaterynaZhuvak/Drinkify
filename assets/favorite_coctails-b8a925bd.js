import{f as I,b as R,s as f,o as H,P}from"./tui-pagination-56e7542a.js";const g="favoriteCocktails",$=document.querySelector(".cardlist"),C="cocktails/lookup/",q="id",l=JSON.parse(localStorage.getItem(g))??[];let k,n;$.addEventListener("click",T);$.addEventListener("click",O);async function T(t){if(!t.target.classList.contains("cardlist-learn"))return;n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await I(C,q,a).then(s=>{const{_id:i,drinkThumb:o,instructions:c,drink:e,ingredients:y,description:v}=s[0];k={_id:i,drinkThumb:o,description:v,drink:e};let _=y.map(m=>`<li data-id="${m.ingredientId}" class="text item-card"><a href="#" class="ingredient-btn">${m.measure||""}${m.title}</a></li>`).join("");x(a,_,e,c,o)})}function x(t,a,s,i,o){R.create(`<div class="container-popup id-for-del" data-id="${t}">
  <button class="popup-close-btn close-cocktail-modal-x">
    <svg class="popup-close-btn-icon">
      <use href="${f}#cross"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="${o}" alt="${s}" onerror="this.onerror=null;this.src='img/rafiki.jpg';"/></div>
    <div>
      <h2 class="name">${s}</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card ingredients-list">${a}</ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card">
   ${i}
  </p>
  <button type="button" class="button-card favorite add-to-fav-cockt" data-id="${t}">
    add to favorite
  </button>
   <button type="button" class="visually-hidden button-card favorite remove-from-fav-cockt" data-id="${t}">
    Remove from favorite
  </button>
   <button type="button" class="button-card back close-cocktail-modal-back">Back</button>
</div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".add-to-fav-cockt").addEventListener("click",b),e.element().querySelector(".remove-from-fav-cockt").addEventListener("click",S),M(e)},onClose:e=>{e.element().querySelector(".add-to-fav-cockt").removeEventListener("click",b),e.element().querySelector(".remove-from-fav-cockt").removeEventListener("click",S)}}).show(),document.querySelector(".ingredients-list").addEventListener("click",H)}function M(t){l.find(({_id:s})=>s===t.element().querySelector(".container-popup").dataset.id)&&(t.element().querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),t.element().querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"))}async function O(t){if(t.preventDefault(),t.target.classList.contains("add-to-fav-cockt-headt")||t.target.closest(".add-to-fav-cockt-headt")){n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await I(C,q,a).then(s=>{const{_id:i,drinkThumb:o,drink:c,description:e}=s[0];k={_id:i,drinkThumb:o,description:e,drink:c}}),w()}else if(t.target.classList.contains("remove-from-fav-cockt-bin")||t.target.closest(".remove-from-fav-cockt-bin"))n=t.target.closest(".cardlist-item"),A(t);else return}function b(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"),w()}function w(){n.querySelector(".add-to-fav-cockt-headt").classList.add("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.remove("visually-hidden"),l.push(k),localStorage.setItem(g,JSON.stringify(l))}function S(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.remove("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.add("visually-hidden"),A(t)}function A(t){n.querySelector(".add-to-fav-cockt-headt").classList.remove("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.add("visually-hidden");const a=l.findIndex(({_id:s})=>s===t.target.closest(".id-for-del").dataset.id);l.splice(a,1),localStorage.setItem(g,JSON.stringify(l)),(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&h(l,d)}const D="/Drinkify/assets/rafiki-b0fd8af4.jpg";function B({drinkThumb:t,drink:a,description:s,_id:i}){let o,c;return r.find(({_id:v})=>v===i)?(o="visually-hidden",c=""):(o="",c="visually-hidden"),`<li class="cardlist-item id-for-del" data-id=${i}>
        <img src="${t}" class="cardlist-img" alt="${a}" onerror="this.onerror=null;this.src='${D}';" width=300>
        <h3 class="cardlist-drink">${a}</h3>
        <p class="cardlist-descr">${s}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button>
        <button class="cardlist-fav add-to-fav-cockt-headt ${o}">
        <svg class="cardlist-svg" weight="18" height="18">
        <use href="${f}#heart"></use>
        </svg>
        </button>
        <button class="cardlist-fav remove-from-fav-cockt-bin ${c}">
        <svg class="cardlist-svg" weight="18" height="18">
         <use href="${f}#trash"></use>
        </svg>
        </button>
        </div>
        </li>`}const d=document.querySelector(".cardlist"),L=document.querySelector(".plug"),p=document.querySelector(".pagination-main"),N="favoriteCocktails",r=JSON.parse(localStorage.getItem(N))??[];let F=1,u=6;h(r,d);function h(t,a){(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&(t.length?L.classList.add("visually-hidden"):L.classList.remove("visually-hidden")),a.innerHTML="",p.innerHTML="",t.length<=u?a.innerHTML=t.map(s=>B(s)).join(""):(E(r,d,u,F),j(r,p,u))}function E(t,a,s,i){a.innerHTML="",i--;let o=s*i,c=o+s,e=t.slice(o,c);return h(e,d)}function j(t,a,s){a.innerHTML="";const i={totalItems:t.length,itemsPerPage:s,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnStyle">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected btnStyleActive">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new P(p,i).on("beforeMove",c=>{const{page:e}=c;E(r,d,u,e)})}export{B as c};
