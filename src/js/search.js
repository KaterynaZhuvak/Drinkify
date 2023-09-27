import { createMarkup } from './markup';
import { fetchCocktails } from './drinkifyapi';

const RANDOM_PARAM = 'r';
const SEARCH_PARAM = 's';
const RANDOM_LINK = 'cocktails/';
const SEARCH_LINK = 'cocktails/search/';
const cardsGallery = document.querySelector('.cardlist');
const inputForm = document.querySelector('#search-form');

createRandomCards();

function createRandomCards() {
  let cardsAmount = 8;
  if (screen.width >= 1280) {
    cardsAmount = 9;
  }

  fetchCocktails(RANDOM_LINK, RANDOM_PARAM, cardsAmount)
    .then(resp => {
      const randomCards = resp
        .map(item => {
          return createMarkup(item);
        })
        .join('');

      cardsGallery.innerHTML = randomCards;
    })
    .catch(error => {
      console.log(error);
    });
}

inputForm.addEventListener('submit', e => {
  e.preventDefault();
  cardsGallery.innerHTML = '';

  const { searchQuery } = e.currentTarget.elements;

  if (!searchQuery.value.trim()) {
    console.log('fail');
    return;
  }

  searchCoctails(searchQuery.value);
});

function searchCoctails(input) {
  fetchCocktails(SEARCH_LINK, SEARCH_PARAM, input)
    .then(resp => {
      console.log(resp.length);

      const searchedCards = resp
        .map(item => {
          return createMarkup(item);
        })
        .join('');

      cardsGallery.innerHTML = searchedCards;
    })
    .catch(error => {
      console.log(error);
    });
}
