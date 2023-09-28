import { createMarkup } from './markup';
import { fetchCocktails } from './drinkifyapi';
import Notiflix from 'notiflix';

const RANDOM_PARAM = 'r';
const SEARCH_PARAM = 's';
const LETTER_PARAM = 'f';

const RANDOM_LINK = 'cocktails/';
const SEARCH_LINK = 'cocktails/search/';
const cardsGallery = document.querySelector('.cardlist');
const paginationContainer = document.querySelector('.pagination-main');
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

async function searchCoctails(input) {
  try {
    const cards = await fetchCocktails(SEARCH_LINK, SEARCH_PARAM, input);

    let currentPage = 1;
    let cardsPerPage = 8;
    if (screen.width >= 1280) {
      cardsPerPage = 9;
    }

    function displayList(arrData, rowPerPage, page) {
      page--;

      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = arrData.slice(start, end);

      const searchedCards = paginatedData
        .map(item => {
          return createMarkup(item);
        })
        .join('');

      cardsGallery.innerHTML = searchedCards;
    }

    function displayPagination(arrData, rowPerPage) {
      const pagesCount = Math.ceil(arrData.length / rowPerPage);
      const ulEl = document.createElement('ul');
      ulEl.classList.add('pagination__list');

      for (let i = 0; i < pagesCount; i++) {
        ulEl.appendChild(liEl);
      }
      paginationContainer.appendChild(ulEl);
    }

    function displayPaginationBtn(page) {
      const liEl = document.createElement('li');
      liEl.classList.add('pagination__item');
      liEl.innerText = page;

      if (currentPage == page) liEl.classList.add('pagination__item--active');

      liEl.addEventListener('click', () => {
        currentPage = page;
        displayList(cards, cardsPerPage, currentPage);

        let currentItemLi = document.querySelector(
          'li.pagination__item--active'
        );
        currentItemLi.classList.remove('pagination__item--active');

        liEl.classList.add('pagination__item--active');
      });

      return liEl;
    }

    displayList(cards, cardsPerPage, currentPage);
    displayPagination(cards, cardsPerPage);

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
