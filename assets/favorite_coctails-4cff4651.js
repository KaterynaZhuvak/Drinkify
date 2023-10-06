import{f as $,b as T,s as u,o as _,N as C,P as H}from"./tui-pagination-e2e717ca.js";const g="favoriteCocktails",I=document.querySelector(".cardlist"),q="cocktails/lookup/",M="id",l=JSON.parse(localStorage.getItem(g))??[];let d,n;const x={disabledScroll(){document.body.style.cssText=`
    overflow: hidden;
    padding-right: ${window.innerWidth-document.body.offsetWidth}px;`},enabledScroll(){document.body.style.cssText=""}};function N(){const t=document.querySelector(".go-top-btn");if(window.innerWidth>=1280)t.style.right="40px";else return}function O(){const t=document.querySelector(".go-top-btn");t.style.right="30px"}I.addEventListener("click",D);I.addEventListener("click",j);async function D(t){if(!t.target.classList.contains("cardlist-learn"))return;n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await $(q,M,a).then(o=>{const{_id:i,drinkThumb:s,instructions:c,drink:e,ingredients:b,description:y}=o[0];d={_id:i,drinkThumb:s,description:y,drink:e};let f=b.map(m=>`<li data-id="${m.ingredientId}" class="text item-card"><a href="#" class="ingredient-btn">${m.measure||""}${m.title}</a></li>`).join("");B(a,f,e,c,s),x.disabledScroll(),N()})}function B(t,a,o,i,s){T.create(`<div class="container-popup id-for-del" data-id="${t}">
  <button class="popup-close-btn close-cocktail-modal-x">
    <svg class="popup-close-btn-icon">
      <use href="${u}#cross"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="${s}" alt="${o}" loading='lazy' onerror="this.onerror=null;this.src='img/rafiki.jpg';"/></div>
    <div>
      <h2 class="name">${o}</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card ingredients-list custom-scrollbar">${a}</ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card custom-scrollbar">
   ${i}
  </p>
  <div class="container-button">
  <button type="button" class="button-card favorite add-to-fav-cockt" data-id="${t}">
    add to favorite
  </button>
   <button type="button" class="visually-hidden button-card favorite remove-from-fav-cockt" data-id="${t}">
    Remove from favorite
  </button>
   <button type="button" class="button-card back close-cocktail-modal-back">Back</button></div>
</div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".add-to-fav-cockt").addEventListener("click",S),e.element().querySelector(".remove-from-fav-cockt").addEventListener("click",L),F(e)},onClose:e=>{e.element().querySelector(".add-to-fav-cockt").removeEventListener("click",S),e.element().querySelector(".remove-from-fav-cockt").removeEventListener("click",L)},onClose:()=>{x.enabledScroll(),O()}}).show(),document.querySelector(".ingredients-list").addEventListener("click",_)}function F(t){l.find(({_id:o})=>o===t.element().querySelector(".container-popup").dataset.id)&&(t.element().querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),t.element().querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"))}async function j(t){if(t.preventDefault(),t.target.classList.contains("add-to-fav-cockt-headt")||t.target.closest(".add-to-fav-cockt-headt")){n=t.target.closest(".cardlist-item");const a=t.target.closest(".cardlist-item").dataset.id;await $(q,M,a).then(o=>{const{_id:i,drinkThumb:s,drink:c,description:e}=o[0];d={_id:i,drinkThumb:s,description:e,drink:c}}),R()}else if(t.target.classList.contains("remove-from-fav-cockt-bin")||t.target.closest(".remove-from-fav-cockt-bin"))n=t.target.closest(".cardlist-item"),A(t);else return}function S(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"),R()}function R(){n.querySelector(".add-to-fav-cockt-headt").classList.add("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.remove("visually-hidden"),C.Notify.info(`Cocktail ${d.drink} added to favorites`),l.push(d),localStorage.setItem(g,JSON.stringify(l))}function L(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.remove("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.add("visually-hidden"),A(t)}function A(t){n.querySelector(".add-to-fav-cockt-headt").classList.remove("visually-hidden"),n.querySelector(".remove-from-fav-cockt-bin").classList.add("visually-hidden");const a=l.findIndex(({_id:o})=>o===t.target.closest(".id-for-del").dataset.id);C.Notify.info(`Cocktail ${l[a].drink} removed from favorites`),l.splice(a,1),localStorage.setItem(g,JSON.stringify(l)),(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&k(l,v)}const K="/Drinkify/assets/rafiki-b0fd8af4.jpg",G=`${u}#fullheart`,J=`${u}#trash`;function U({drinkThumb:t,drink:a,description:o,_id:i},s){let c,e;return h.find(({_id:f})=>f===i)?(c="visually-hidden",e=""):(c="",e="visually-hidden"),`<li class="cardlist-item id-for-del" data-id=${i}>
        <img src="${t}" loading="lazy" class="cardlist-img" alt="${a}" onerror="this.onerror=null;this.src='${K}';" width=300>
        <h3 class="cardlist-drink">${a}</h3>
        <p class="cardlist-descr">${o}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button>
        <button class="cardlist-fav add-to-fav-cockt-headt ${c}">
        <svg class="cardlist-svg" weight="18" height="18">
        <use href="${u}#heart"></use>
        </svg>
        </button>
        <button class="cardlist-fav remove-from-fav-cockt-bin ${e}">
        <svg class="cardlist-svg" weight="18" height="18">
         <use href="${s}"></use>
        </svg>
        </button>
        </div>
        </li>`}const v=document.querySelector(".cardlist"),w=document.querySelector(".plug"),p=document.querySelector(".tui-pagination"),W="favoriteCocktails",h=JSON.parse(localStorage.getItem(W))??[];let Y=1,r=6,E=4;screen.width>=1280&&(E=7);(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&k(h,v);function k(t,a){(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&(t.length?w.classList.add("visually-hidden"):w.classList.remove("visually-hidden")),a.innerHTML="",p.innerHTML="",t.length<=r?a.innerHTML=t.map(o=>U(o,J)).join(""):(P(t,a,r,Y),z(t,p,r))}function P(t,a,o,i){a.innerHTML="",i--;let s=o*i,c=s+o,e=t.slice(s,c);return k(e,v)}function z(t,a,o){a.innerHTML="";const i={totalItems:t.length,itemsPerPage:o,visiblePages:E,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnStyle">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected btnStyleActive btnMargL btnMargR">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} btnMargL btnMargR btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} btnMargL btnMargR btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip btnStyle"><span class="tui-ico-ellip">...</span></a>'}};new H(p,i).on("beforeMove",c=>{const{page:e}=c;P(h,v,r,e)})}export{U as c,G as i};
