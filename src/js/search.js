import { createMarkup } from './markup';
import { fetchCocktails } from './drinkifyapi';
import Notiflix from 'notiflix';

const RANDOM_PARAM = 'r';
const SEARCH_PARAM = 's';
const LETTER_PARAM = 'f';

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
      Notiflix.Notify.failure('Server error');
      console.log(error);
    });
}

inputForm.addEventListener('submit', e => {
  e.preventDefault();
  cardsGallery.innerHTML = '';

  const { searchQuery } = e.currentTarget.elements;

  if (!searchQuery.value.trim()) {
    Notiflix.Notify.failure('Please, fill in the search');
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
      inputForm.reset();
    })
    .catch(error => {
      Notiflix.Notify.failure('No results found, please try another name');
      console.log(error);
    });
}

function searchCoctailsByLetter(letter) {
  fetchCocktails(SEARCH_LINK, LETTER_PARAM, letter)
    .then(resp => {
      const searchedCards = resp
        .map(item => {
          return createMarkup(item);
        })
        .join('');

      cardsGallery.innerHTML = searchedCards;
    })
    .catch(error => {
      Notiflix.Notify.failure('No results found, please try another letter');
      console.log(error);
    });
}

export { searchCoctailsByLetter, cardsGallery };
