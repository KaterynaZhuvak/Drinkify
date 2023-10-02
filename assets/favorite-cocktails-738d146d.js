import{f as i}from"./popupingredients-30ac8a02.js";import{N as e}from"./popupcocktails-15740208.js";const a=document.querySelector(".cardlist"),o=document.querySelector(".plug"),l=document.querySelector(".container-section"),n=document.querySelector(".section-tittle"),d="r",u="cocktails/";let m=6;i(u,d,m).then(t=>{const s=t.map(c=>h(c)).join("");o.classList.add("display"),l.classList.add("container-section-with-cards"),n.classList.add("section-tittle-with-cards"),a.innerHTML=s}).catch(t=>{e.Notify.failure("Server error"),console.log(t)});function h({drinkThumb:t,drink:s,description:c,_id:r}){return`<li class="cardlist-item" data-id=${r}>
        <img src="${t}" class="cardlist-img" alt="${s}" onerror="this.onerror=null;this.src='img/rafiki.jpg';" width=300>
        <h3 class="cardlist-drink">${s}</h3>
        <p class="cardlist-descr">${c}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button><button class="cardlist-fav"><svg
                class="cardlist-svg" weight="18" height="18">
                <use href="img/sprite.svg#trash"></use>
            </svg></button></div>
        </li>`}
