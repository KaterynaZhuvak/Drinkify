import{f as $,b as _,s as d,o as R,P as H}from"./tui-pagination-14ac2a24.js";const p="favoriteCocktails",w=document.querySelector(".cardlist"),C="cocktails/lookup/",q="id",l=JSON.parse(localStorage.getItem(p))??[];let k,n;w.addEventListener("click",P);w.addEventListener("click",O);async function P(t){if(!t.target.classList.contains("cardlist-learn"))return;n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await $(C,q,a).then(o=>{const{_id:s,drinkThumb:i,instructions:c,drink:e,ingredients:y,description:b}=o[0];k={_id:s,drinkThumb:i,description:b,drink:e};let v=y.map(m=>`<li data-id="${m.ingredientId}" class="text item-card"><a href="#" class="ingredient-btn">${m.measure||""}${m.title}</a></li>`).join("");T(a,v,e,c,i)})}function T(t,a,o,s,i){_.create(`<div class="container-popup id-for-del" data-id="${t}">
  <button class="popup-close-btn close-cocktail-modal-x">
    <svg class="popup-close-btn-icon">
      <use href="${d}#cross"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="${i}" alt="${o}" onerror="this.onerror=null;this.src='img/rafiki.jpg';"/></div>
    <div>
      <h2 class="name">${o}</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card ingredients-list">${a}</ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card">
   ${s}
  </p>
  <button type="button" class="button-card favorite add-to-fav-cockt" data-id="${t}">
    add to favorite
  </button>
   <button type="button" class="visually-hidden button-card favorite remove-from-fav-cockt" data-id="${t}">
    Remove from favorite
  </button>
   <button type="button" class="button-card back close-cocktail-modal-back">Back</button>
</div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".add-to-fav-cockt").addEventListener("click",S),e.element().querySelector(".remove-from-fav-cockt").addEventListener("click",L),x(e)},onClose:e=>{e.element().querySelector(".add-to-fav-cockt").removeEventListener("click",S),e.element().querySelector(".remove-from-fav-cockt").removeEventListener("click",L)}}).show(),document.querySelector(".ingredients-list").addEventListener("click",R)}function x(t){l.find(({_id:o})=>o===t.element().querySelector(".container-popup").dataset.id)&&(t.element().querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),t.element().querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"))}async function O(t){if(t.preventDefault(),t.target.classList.contains("add-to-fav-cockt-headt")||t.target.closest(".add-to-fav-cockt-headt")){n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await $(C,q,a).then(o=>{const{_id:s,drinkThumb:i,drink:c,description:e}=o[0];k={_id:s,drinkThumb:i,description:e,drink:c}}),A()}else if(t.target.classList.contains("remove-from-fav-cockt-bin")||t.target.closest(".remove-from-fav-cockt-bin"))n=t.target.closest(".cardlist-item"),E(t);else return}function S(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"),A()}function A(){n.querySelector(".add-to-fav-cockt-headt").classList.add("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.remove("visually-hidden"),l.push(k),localStorage.setItem(p,JSON.stringify(l))}function L(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.remove("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.add("visually-hidden"),E(t)}function E(t){n.querySelector(".add-to-fav-cockt-headt").classList.remove("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.add("visually-hidden");const a=l.findIndex(({_id:o})=>o===t.target.closest(".id-for-del").dataset.id);l.splice(a,1),localStorage.setItem(p,JSON.stringify(l)),(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&h(l,u)}const D="/Drinkify/assets/rafiki-b0fd8af4.jpg",Y=`${d}#fullheart`,B=`${d}#trash`;function F({drinkThumb:t,drink:a,description:o,_id:s},i){let c,e;return g.find(({_id:v})=>v===s)?(c="visually-hidden",e=""):(c="",e="visually-hidden"),`<li class="cardlist-item id-for-del" data-id=${s}>
        <img src="${t}" class="cardlist-img" alt="${a}" onerror="this.onerror=null;this.src='${D}';" width=300>
        <h3 class="cardlist-drink">${a}</h3>
        <p class="cardlist-descr">${o}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button>
        <button class="cardlist-fav add-to-fav-cockt-headt ${c}">
        <svg class="cardlist-svg" weight="18" height="18">
        <use href="${d}#heart"></use>
        </svg>
        </button>
        <button class="cardlist-fav remove-from-fav-cockt-bin ${e}">
        <svg class="cardlist-svg" weight="18" height="18">
         <use href="${i}"></use>
        </svg>
        </button>
        </div>
        </li>`}const u=document.querySelector(".cardlist"),I=document.querySelector(".plug"),f=document.querySelector(".pagination-main"),N="favoriteCocktails",g=JSON.parse(localStorage.getItem(N))??[];let j=1,r=6;(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&h(g,u);function h(t,a){(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&(t.length?I.classList.add("visually-hidden"):I.classList.remove("visually-hidden")),a.innerHTML="",f.innerHTML="",t.length<=r?a.innerHTML=t.map(o=>F(o,B)).join(""):(M(t,a,r,j),K(t,f,r))}function M(t,a,o,s){a.innerHTML="",s--;let i=o*s,c=i+o,e=t.slice(i,c);return h(e,u)}function K(t,a,o){a.innerHTML="";const s={totalItems:t.length,itemsPerPage:o,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnStyle">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected btnStyleActive">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new H(f,s).on("beforeMove",c=>{const{page:e}=c;M(g,u,r,e)})}export{F as c,Y as i};
