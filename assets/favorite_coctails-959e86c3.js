import{f as q,b as D,s as f,o as O,N as I,P as B}from"./tui-pagination-b9aef818.js";const n=document.querySelector(".carousel-cr-by"),F=document.querySelector(".cr-by-arrow-left"),W=document.querySelector(".cr-by-arrow-right"),j=n.querySelector(".cr-by-card").offSetWidth;[...n.children];let h=!1,M,E;Math.round(n.offSetWidth/j);const K=()=>{n.scrollLeft-=247},J=()=>{n.scrollLeft+=247},U=t=>{h=!0,n.classList.add("dragging"),M=t.pageX,E=n.scrollLeft},Y=t=>{h&&(n.scrollLeft=E-(t.pageX-M))},X=()=>{h=!1,n.classList.remove("dragging")};n.addEventListener("mousedown",U);n.addEventListener("mousemove",Y);document.addEventListener("mouseup",X);F.addEventListener("click",K);W.addEventListener("click",J);const k="favoriteCocktails",R=document.querySelector(".cardlist"),x="cocktails/lookup/",A="id",l=JSON.parse(localStorage.getItem(k))??[];let u,r;const P={disabledScroll(){document.body.style.cssText=`
    overflow: hidden;
    padding-right: ${window.innerWidth-document.body.offsetWidth}px;`},enabledScroll(){document.body.style.cssText=""}};function z(){const t=document.querySelector(".go-top-btn");if(window.innerWidth>=1280)t.style.right="40px";else return}function V(){const t=document.querySelector(".go-top-btn");t.style.right="30px"}R.addEventListener("click",G);R.addEventListener("click",tt);async function G(t){if(!t.target.classList.contains("cardlist-learn"))return;r=t.target.closest(".cardlist-item");const o=t.target.closest(".cardlist-item").dataset.id;await q(x,A,o).then(a=>{const{_id:s,drinkThumb:i,instructions:c,drink:e,ingredients:S,description:L}=a[0];u={_id:s,drinkThumb:i,description:L,drink:e};let v=S.map(g=>`<li data-id="${g.ingredientId}" class="text item-card"><a href="#" class="ingredient-btn">${g.measure||""}${g.title}</a></li>`).join("");Q(o,v,e,c,i),P.disabledScroll(),z()})}function Q(t,o,a,s,i){D.create(`<div class="container-popup id-for-del" data-id="${t}">
  <button class="popup-close-btn close-cocktail-modal-x">
    <svg class="popup-close-btn-icon">
      <use href="${f}#cross"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="${i}" alt="${a}" loading='lazy' onerror="this.onerror=null;this.src='img/rafiki.jpg';"/></div>
    <div>
      <h2 class="name">${a}</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card ingredients-list custom-scrollbar">${o}</ul>
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
</div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".add-to-fav-cockt").addEventListener("click",w),e.element().querySelector(".remove-from-fav-cockt").addEventListener("click",C),Z(e)},onClose:e=>{e.element().querySelector(".add-to-fav-cockt").removeEventListener("click",w),e.element().querySelector(".remove-from-fav-cockt").removeEventListener("click",C)},onClose:()=>{P.enabledScroll(),V()}}).show(),document.querySelector(".ingredients-list").addEventListener("click",O)}function Z(t){l.find(({_id:a})=>a===t.element().querySelector(".container-popup").dataset.id)&&(t.element().querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),t.element().querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"))}async function tt(t){if(t.preventDefault(),t.target.classList.contains("add-to-fav-cockt-headt")||t.target.closest(".add-to-fav-cockt-headt")){r=t.target.closest(".cardlist-item");const o=t.target.closest(".cardlist-item").dataset.id;await q(x,A,o).then(a=>{const{_id:s,drinkThumb:i,drink:c,description:e}=a[0];u={_id:s,drinkThumb:i,description:e,drink:c}}),T()}else if(t.target.classList.contains("remove-from-fav-cockt-bin")||t.target.closest(".remove-from-fav-cockt-bin"))r=t.target.closest(".cardlist-item"),_(t);else return}function w(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.add("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.remove("visually-hidden"),T()}function T(){r.querySelector(".add-to-fav-cockt-headt").classList.add("visually-hidden"),r.querySelector(".remove-from-fav-cockt-bin").classList.remove("visually-hidden"),I.Notify.info(`Cocktail ${u.drink} added to favorites`),l.push(u),localStorage.setItem(k,JSON.stringify(l))}function C(t){t.preventDefault(),document.querySelector(".add-to-fav-cockt").classList.remove("visually-hidden"),document.querySelector(".remove-from-fav-cockt").classList.add("visually-hidden"),_(t)}function _(t){r.querySelector(".add-to-fav-cockt-headt").classList.remove("visually-hidden"),r.querySelector(".remove-from-fav-cockt-bin").classList.add("visually-hidden");const o=l.findIndex(({_id:a})=>a===t.target.closest(".id-for-del").dataset.id);I.Notify.info(`Cocktail ${l[o].drink} removed from favorites`),l.splice(o,1),localStorage.setItem(k,JSON.stringify(l)),(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&b(l,m)}const et="/Drinkify/assets/rafiki-b0fd8af4.jpg",lt=`${f}#fullheart`,ot=`${f}#trash`;function at({drinkThumb:t,drink:o,description:a,_id:s},i){let c,e;return y.find(({_id:v})=>v===s)?(c="visually-hidden",e=""):(c="",e="visually-hidden"),`<li class="cardlist-item id-for-del" data-id=${s}>
        <img src="${t}" loading="lazy" class="cardlist-img" alt="${o}" onerror="this.onerror=null;this.src='${et}';" width=300>
        <h3 class="cardlist-drink">${o}</h3>
        <p class="cardlist-descr">${a}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button>
        <button class="cardlist-fav add-to-fav-cockt-headt ${c}">
        <svg class="cardlist-svg" weight="18" height="18">
        <use href="${f}#heart"></use>
        </svg>
        </button>
        <button class="cardlist-fav remove-from-fav-cockt-bin ${e}">
        <svg class="cardlist-svg" weight="18" height="18">
         <use href="${i}"></use>
        </svg>
        </button>
        </div>
        </li>`}const m=document.querySelector(".cardlist"),$=document.querySelector(".plug"),p=document.querySelector(".tui-pagination"),st="favoriteCocktails",y=JSON.parse(localStorage.getItem(st))??[];let it=1,d=6,H=4;screen.width>=1280&&(H=7);(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&b(y,m);function b(t,o){(window.location.pathname==="/Drinkify/favorite-cocktails.html"||window.location.pathname==="/favorite-cocktails.html")&&(t.length?$.classList.add("visually-hidden"):$.classList.remove("visually-hidden")),o.innerHTML="",p.innerHTML="",t.length<=d?o.innerHTML=t.map(a=>at(a,ot)).join(""):(N(t,o,d,it),ct(t,p,d))}function N(t,o,a,s){o.innerHTML="",s--;let i=a*s,c=i+a,e=t.slice(i,c);return b(e,m)}function ct(t,o,a){o.innerHTML="";const s={totalItems:t.length,itemsPerPage:a,visiblePages:H,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnStyle">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected btnStyleActive btnMargL btnMargR">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} btnMargL btnMargR btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} btnMargL btnMargR btnStyle"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip btnStyle"><span class="tui-ico-ellip">...</span></a>'}};new B(p,s).on("beforeMove",c=>{const{page:e}=c;N(y,m,d,e)})}export{at as c,lt as i};
