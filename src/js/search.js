import { createMarkup } from './markup';
import { fetchCocktails } from './drinkifyapi';
import Notiflix from 'notiflix';

const RANDOM_PARAM = 'r';
const SEARCH_PARAM = 's';
const LETTER_PARAM = 'f';

const RANDOM_LINK = 'cocktails/';
const SEARCH_LINK = 'cocktails/search/';

const cocktWrapper = document.querySelector('.no-cocktails-wrapper');
const cardsGallery = document.querySelector('.cardlist');
const pagination_element = document.querySelector('.pagination-main');
const inputForm = document.querySelector('#search-form');
const cocktailsTitle = document.querySelector('.cardlist-header');
const cocktailsSection = document.querySelector('#cocktails-section');

let currentPage = 1;
let cardsPerPage = 8;
if (screen.width >= 1280) {
  cardsPerPage = 9;
}
let page_count;
let cards;

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
  cocktailsSection.scrollIntoView();

  const { searchQuery } = e.currentTarget.elements;

  if (!searchQuery.value.trim()) {
    Notiflix.Notify.failure('Please, fill in the search');
    return;
  }

  searchCocktails(searchQuery.value, SEARCH_LINK, SEARCH_PARAM);
});

function resetSearch() {
  cocktWrapper.classList.add('visually-hidden');
  currentPage = 1;
  cardsGallery.innerHTML = '';
  pagination_element.innerHTML = '';
}

async function searchCocktails(input, link, param) {
  cocktailsTitle.textContent = 'Loading Data...';
  try {
    cards = await fetchCocktails(link, param, input);

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
    cocktWrapper.classList.remove('visually-hidden');
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

  page_count = Math.ceil(items.length / per_page);

  let btn = '';
  for (let i = 1; i < page_count + 1; i++) {
    if (i === 1) {
      btn += `<button id="${i}" class="pagination-number-btn active">${i}</button>`;
      continue;
    }
    btn += `<button id="${i}" class="pagination-number-btn">${i}</button>`;
  }
  wrapper.insertAdjacentHTML(
    'afterbegin',
    `<button class="previous pagination-arrow-btn">&#60;</button><div class=pagination-numbers-main>${btn}</div><button class="next pagination-arrow-btn">&#62;</button>`
  );

  document.querySelector('.previous').disabled = true;
}

pagination_element.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  cocktailsSection.scrollIntoView();

  if (e.target.classList.contains('previous')) {
    currentPage--;
  } else if (e.target.classList.contains('next')) {
    currentPage++;
  } else {
    currentPage = e.target.textContent;
  }

  if (currentPage == 1) {
    document.querySelector('.previous').disabled = true;
  } else {
    document.querySelector('.previous').disabled = false;
  }

  if (currentPage == page_count) {
    document.querySelector('.next').disabled = true;
  } else {
    document.querySelector('.next').disabled = false;
  }

  DisplayList(cards, cardsGallery, cardsPerPage, currentPage);

  let current_btn = document.querySelector('.pagination-number-btn.active');
  current_btn.classList.remove('active');

  let new_current_btn = document.getElementById(`${currentPage}`);
  new_current_btn.classList.add('active');
});

export {
  searchCocktails,
  SEARCH_LINK,
  LETTER_PARAM,
  resetSearch,
  cocktailsSection,
};

// import { fetchCocktails } from './drinkifyapi';
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basiclightbox.min.css';

// const cardsGallery = document.querySelector('.cardlist');
// const SEARCH_BY_ID_LINK = 'cocktails/lookup/';
// const SEARCH_BY_ID_PARAM = 'id';

// cardsGallery.addEventListener('click', e => {
//   if (!e.target.classList.contains('cardlist-learn')) {
//     return;
//   }

//   const id = e.target.closest('.cardlist-item').dataset.id;
//   fetchCocktails(SEARCH_BY_ID_LINK, SEARCH_BY_ID_PARAM, id).then(resp => {
//     console.log(resp[0]);
//     const { drinkThumb, instructions, drink, ingredients } = resp[0];

//     let ingredientsRaw = ingredients
//       .map(ingredient => {
//         return `<li data-id="${ingredient.ingredientId}" class="text item-card">${ingredient.measure}<a href="">${ingredient.title}</a></li>`;
//       })
//       .join('');

//     showModalWindow(ingredientsRaw, drink, instructions, drinkThumb);
//   });
// });

// function showModalWindow(ingredientsRaw, drink, instructions, drinkThumb) {
//   const instance = basicLightbox.create(`<div class="container-popup">
//   <button class="popup-close-btn">
//     <svg class="popup-close-btn-icon">
//       <use href="img/sprite.svg#popup-close-btn"></use>
//     </svg>
//   </button>
//   <div class="box">
//     <div class="picture"><img src="${drinkThumb}" alt="" /></div>
//     <div>
//       <h2 class="name">${drink}</h2>
//       <p class="caption-card">Ingredients:</p>
//       <p class="text text-card">Per cocktail</p>
//       <ul class="list-card">${ingredientsRaw}</ul>
//     </div>
//   </div>
//   <p class="caption-card">Instructions:</p>
//   <p class="text desc-card">
//    ${instructions}
//   </p>
//   <button type="button" class="button-card favorite-theme-light">
//     add to favorite
//   </button>
//    <button type="button" class="button-card back-theme-light close-cocktail-modal">Back</button>
// </div>`);
//   instance.show();

//   document
//     .querySelector('.close-cocktail-modal')
//     .addEventListener('click', e => instance.close());
// }
