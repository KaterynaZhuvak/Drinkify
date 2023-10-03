import{f as $,b as T,s as d,o as _,P as R}from"./tui-pagination-cdb06503.js";const p="favoriteCocktails",I=document.querySelector(".cardlist"),C="cocktails/lookup/",q="id",l=JSON.parse(localStorage.getItem(p))??[];let g,n;const A={disabledScroll(){document.body.style.cssText=`
    overflow: hidden;
    padding-right: ${window.innerWidth-document.body.offsetWidth}px;`},enabledScroll(){document.body.style.cssText=""}};I.addEventListener("click",H);I.addEventListener("click",D);async function H(t){if(!t.target.classList.contains("cardlist-learn"))return;n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await $(C,q,a).then(o=>{const{_id:s,drinkThumb:i,instructions:c,drink:e,ingredients:y,description:b}=o[0];g={_id:s,drinkThumb:i,description:b,drink:e};let v=y.map(m=>`<li data-id="${m.ingredientId}" class="text item-card"><a href="#" class="ingredient-btn">${m.measure||""}${m.title}</a></li>`).join("");P(a,v,e,c,i),A.disabledScroll()})}function P(t,a,o,s,i){T.create(`<div class="container-popup id-for-del" data-id="${t}">
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
      <ul class="list-card ingredients-list custom-scrollbar">${a}</ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card custom-scrollbar">
   ${s}
  </p>
  <div class="container-button">
  <button type="button" class="button-card favorite add-to-fav-cockt" data-id="${t}">
    add to favorite
  </button>
   <button type="button" class="visually-hidden button-card favorite remove-from-fav-cockt" data-id="${t}">
    Remove from favorite
  </button>
   <button type="button" class="button-card back close-cocktail-modal-back">Back</button></div>
</div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".add-to-fav-cockt").addEventListener("click",S),e.element().querySelector(".remove-from-fav-cockt").addEventListener("click",L),O(e)},onClose:e=>{e.element().querySelector(".add-to-fav-cockt").removeEventListener("click",S),e.element().querySelector(".remove-from-fav-cockt").removeEventListener("click",L)},onClose:()=>{A.enabledScroll()}}).show(),document.querySelector(".ingredients-list").addEventListener("click",_)}function O(t){l.find(({_id:o})=>o===t.element().querySelector(".container-popup").dataset.id)&&(t.element().querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),t.element().querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"))}async function D(t){if(t.preventDefault(),t.target.classList.contains("add-to-fav-cockt-headt")||t.target.closest(".add-to-fav-cockt-headt")){n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await $(C,q,a).then(o=>{const{_id:s,drinkThumb:i,drink:c,description:e}=o[0];g={_id:s,drinkThumb:i,description:e,drink:c}}),E()}else if(t.target.classList.contains("remove-from-fav-cockt-bin")||t.target.closest(".remove-from-fav-cockt-bin"))n=t.target.closest(".cardlist-item"),x(t);else return}function S(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"),E()}function E(){n.querySelector(".add-to-fav-cockt-headt").classList.add("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.remove("visually-hidden"),l.push(g),localStorage.setItem(p,JSON.stringify(l))}function L(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.remove("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.add("visually-hidden"),x(t)}function x(t){n.querySelector(".add-to-fav-cockt-headt").classList.remove("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.add("visually-hidden");const a=l.findIndex(({_id:o})=>o===t.target.closest(".id-for-del").dataset.id);l.splice(a,1),localStorage.setItem(p,JSON.stringify(l)),(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&k(l,u)}const B="/Drinkify/assets/rafiki-b0fd8af4.jpg",W=`${d}#fullheart`,F=`${d}#trash`;function N({drinkThumb:t,drink:a,description:o,_id:s},i){let c,e;return h.find(({_id:v})=>v===s)?(c="visually-hidden",e=""):(c="",e="visually-hidden"),`<li class="cardlist-item id-for-del" data-id=${s}>
        <img src="${t}" class="cardlist-img" alt="${a}" onerror="this.onerror=null;this.src='${B}';" width=300>
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
        </li>`}const u=document.querySelector(".cardlist"),w=document.querySelector(".plug"),f=document.querySelector(".pagination-main"),j="favoriteCocktails",h=JSON.parse(localStorage.getItem(j))??[];let K=1,r=6;(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&k(h,u);function k(t,a){(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&(t.length?w.classList.add("visually-hidden"):w.classList.remove("visually-hidden")),a.innerHTML="",f.innerHTML="",t.length<=r?a.innerHTML=t.map(o=>N(o,F)).join(""):(M(t,a,r,K),J(t,f,r))}function M(t,a,o,s){a.innerHTML="",s--;let i=o*s,c=i+o,e=t.slice(i,c);return k(e,u)}function J(t,a,o){a.innerHTML="";const s={totalItems:t.length,itemsPerPage:o,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnStyle">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected btnStyleActive">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new R(f,s).on("beforeMove",c=>{const{page:e}=c;M(h,u,r,e)})}export{N as c,W as i};
