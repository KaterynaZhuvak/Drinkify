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
  pagination_element.innerHTML = '';

  const { searchQuery } = e.currentTarget.elements;

  if (!searchQuery.value.trim()) {
    Notiflix.Notify.failure('Please, fill in the search');
    return;
  }

  searchCoctails(searchQuery.value);
});

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

let currentPage = 1;
let cardsPerPage = 8;
if (screen.width >= 1280) {
  cardsPerPage = 9;
}

async function searchCoctails(input) {
  try {
    const cards = await fetchCocktails(SEARCH_LINK, SEARCH_PARAM, input);

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

    inputForm.reset();
  } catch (error) {
    Notiflix.Notify.failure('No results found, please try another name');
    console.log(error);
  }

  // fetchCocktails(SEARCH_LINK, SEARCH_PARAM, input)
  //   .then(resp => {
  //     console.log(resp.length);

  //     const searchedCards = resp
  //       .map(item => {
  //         return createMarkup(item);
  //       })
  //       .join('');

  //     cardsGallery.innerHTML = searchedCards;
  //     inputForm.reset();
  //   })
  //   .catch(error => {
  //     Notiflix.Notify.failure('No results found, please try another name');
  //     console.log(error);
  //   });
}

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = '';
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  wrapper.innerHTML = paginatedItems
    .map(item => {
      return createMarkup(item);
    })
    .join('');
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = '';

  let page_count = Math.ceil(items.length / rows_per_page);

  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }

  // wrapper.insertAdjacentHTML(
  //   'afterbegin',
  //   '<button class="previous">&#60;</button>'
  // );
  // wrapper.insertAdjacentHTML(
  //   'beforeend',
  //   '<button class="next">&#62;</button>'
  // );
}

function PaginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;
  button.classList.add('pagination-number-btn');

  if (currentPage == page) button.classList.add('active');

  button.addEventListener('click', function () {
    currentPage = page;
    DisplayList(items, cardsGallery, cardsPerPage, currentPage);

    let current_btn = document.querySelector('.pagination-number-btn.active');
    current_btn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}

export { searchCoctailsByLetter, cardsGallery };
