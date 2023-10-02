import Notiflix from 'notiflix';
import { fetchCocktails } from './drinkifyapi';
import { showModalWindow } from './popupcocktails.js';
import { createMarkup } from './markup';

const cardList = document.querySelector('.cardlist'); // list
const plugEl = document.querySelector('.plug'); //sorry
const containerSection = document.querySelector('.container-section');
const sectionTitle = document.querySelector('.section-tittle');

const KEY_FAVORITE_COCKTAILS = 'favoriteCocktails';
// const SEARCH_BY_ID_LINK = 'ingredients/';
const favCokctArr =
  JSON.parse(localStorage.getItem(KEY_FAVORITE_COCKTAILS)) ?? [];
let ingredientObj;

// const RANDOM_PARAM = 'r';
// const RANDOM_LINK = 'cocktails/';
let cardsAmount = 6;

renderFavCocktails(favCokctArr, cardList);

function renderFavCocktails(arr, container) {
  if (!arr.length) {
    plugEl.classList.remove('visually-hidden');
  }

  plugEl.classList.add('visually-hidden');
  const markup = arr
    .map(card => {
      return createMarkup(card);
    })
    .join('');

  container.innerHTML = markup;
}
// stop
