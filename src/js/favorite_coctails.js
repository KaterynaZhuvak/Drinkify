import Notiflix from 'notiflix';
import { fetchCocktails } from './drinkifyapi';
import { showModalWindow } from './popupcocktails.js';

const cardList = document.querySelector(".cardlist");
const plugEl = document.querySelector(".plug");
const containerSection = document.querySelector(".container-section");
const sectionTitle = document.querySelector(".section-tittle");


const RANDOM_PARAM = 'r';
const RANDOM_LINK = 'cocktails/';
let cardsAmount = 6;


  fetchCocktails(RANDOM_LINK, RANDOM_PARAM, cardsAmount)
    .then(resp => {
      const cards = resp
        .map(item => {
          return createMarkup(item);
        })
        .join('');
      
        plugEl.classList.add("display");
      containerSection.classList.add("container-section-with-cards");
      sectionTitle.classList.add("section-tittle-with-cards");
      cardList.innerHTML = cards;
      
    })
    .catch(error => {
      Notiflix.Notify.failure('Server error');
      console.log(error);
    });


function createMarkup({ drinkThumb, drink, description, _id }) {
  let markup = `<li class="cardlist-item" data-id=${_id}>
        <img src="${drinkThumb}" class="cardlist-img" alt="${drink}" onerror="this.onerror=null;this.src='img/rafiki.jpg';" width=300>
        <h3 class="cardlist-drink">${drink}</h3>
        <p class="cardlist-descr">${description}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button><button class="cardlist-fav"><svg
                class="cardlist-svg" weight="18" height="18">
                <use href="img/sprite.svg#trash"></use>
            </svg></button></div>
        </li>`;
  return markup;
  
}























