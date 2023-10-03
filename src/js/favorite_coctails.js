// import Notiflix from 'notiflix';
// import { fetchCocktails } from './drinkifyapi';
// import { showModalWindow } from './popupcocktails.js';

import { onLearnMoreClickHandler } from './popupcocktails';
import { createMarkup } from './markup';

const cardList = document.querySelector('.cardlist'); // list
const plugEl = document.querySelector('.plug'); //sorry

const KEY_FAVORITE_COCKTAILS = 'favoriteCocktails';
const favCokctArr =
  JSON.parse(localStorage.getItem(KEY_FAVORITE_COCKTAILS)) ?? [];

let currentPage = 1;
let cardsPerPage = 6;

renderFavCocktails(favCokctArr, cardList);

function renderFavCocktails(arr, container) {
  if (
    window.location.pathname === '/Drinkify/favorite-cocktails.html' ||
    window.location.pathname === '/favorite-cocktails.html'
  ) {
    if (!arr.length) {
      plugEl.classList.remove('visually-hidden');
    } else plugEl.classList.add('visually-hidden');
  }

  const markup = arr
    .map(card => {
      return createMarkup(card);
    })
    .join('');

  container.innerHTML = markup;
}

// cardList.addEventListener('click', onLearnMoreClickHandler);

export { renderFavCocktails, cardList, favCokctArr };
