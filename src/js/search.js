import { createMarkup } from './markup';
import { fetchCocktails } from './drinkifyapi';
import Notiflix from 'notiflix';

const RANDOM_PARAM = 'r';
const SEARCH_PARAM = 's';
const LETTER_PARAM = 'f';

const RANDOM_LINK = 'cocktails/';
const SEARCH_LINK = 'cocktails/search/';

const cardsGallery = document.querySelector('.cardlist');
const pagination_element = document.querySelector('.pagination');
const inputForm = document.querySelector('#search-form');
const cocktailsTitle = document.querySelector('.cardlist-header');

let currentPage = 1;
let cardsPerPage = 8;
if (screen.width >= 1280) {
  cardsPerPage = 9;
}
cocktailsTitle.textContent = 'Loading Data...';

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
      cocktailsTitle.textContent = 'Cocktails';
    })
    .catch(error => {
      Notiflix.Notify.failure('Server error');
      console.log(error);
    });
}

inputForm.addEventListener('submit', e => {
  e.preventDefault();
  resetSearch();

  const { searchQuery } = e.currentTarget.elements;

  if (!searchQuery.value.trim()) {
    Notiflix.Notify.failure('Please, fill in the search');
    return;
  }

  searchCocktails(searchQuery.value, SEARCH_LINK, SEARCH_PARAM);
});

function resetSearch() {
  currentPage = 1;
  cardsGallery.innerHTML = '';
  pagination_element.innerHTML = '';
}

async function searchCocktails(input, link, param) {
  cocktailsTitle.textContent = 'Loading Data...';
  try {
    const cards = await fetchCocktails(link, param, input);

    if (cards.length <= cardsPerPage) {
      cardsGallery.innerHTML = cards
        .map(item => {
          return createMarkup(item);
        })
        .join('');
    } else {
      DisplayList(cards, cardsGallery, cardsPerPage, currentPage);
      SetupPagination(cards, pagination_element, cardsPerPage);
    }

    cocktailsTitle.textContent = 'Searching results';
    inputForm.reset();
  } catch (error) {
    cocktailsTitle.textContent = '';
    Notiflix.Notify.failure('No results found, please try another name');
    console.log(error);
  }
}

function DisplayList(items, wrapper, per_page, page) {
  wrapper.innerHTML = '';
  page--;

  let start = per_page * page;
  let end = start + per_page;
  let paginatedItems = items.slice(start, end);

  wrapper.innerHTML = paginatedItems
    .map(item => {
      return createMarkup(item);
    })
    .join('');
}

function SetupPagination(items, wrapper, per_page) {
  wrapper.innerHTML = '';

  let page_count = Math.ceil(items.length / per_page);

  let btn = '';
  for (let i = 1; i < page_count + 1; i++) {
    if (i === 1) {
      btn += `<button class="pagination-number-btn active">${i}</button>`;
      continue;
    }
    btn += `<button class="pagination-number-btn">${i}</button>`;
  }
  wrapper.insertAdjacentHTML('afterbegin', btn);

  pagination_element.addEventListener('click', e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    currentPage = e.target.textContent;
    DisplayList(items, cardsGallery, cardsPerPage, currentPage);

    let current_btn = document.querySelector('.pagination-number-btn.active');
    current_btn.classList.remove('active');

    e.target.classList.add('active');
  });

  // wrapper.insertAdjacentHTML(
  //   'afterbegin',
  //   '<button class="previous">&#60;</button>'
  // );
  // wrapper.insertAdjacentHTML(
  //   'beforeend',
  //   '<button class="next">&#62;</button>'
  // );
}

export { searchCocktails, SEARCH_LINK, LETTER_PARAM, resetSearch };
