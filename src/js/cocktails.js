import { fetchCocktails } from './drinkifyapi';

const cardsGallery = document.querySelector('.cardlist');
const SEARCH_BY_ID_LINK = 'cocktails/lookup/';
const SEARCH_BY_ID_PARAM = 'id';

cardsGallery.addEventListener('click', e => {
  if (!e.target.classList.contains('cardlist-learn')) {
    return;
  }
  const id = e.target.closest('.cardlist-item').dataset.id;
  fetchCocktails(SEARCH_BY_ID_LINK, SEARCH_BY_ID_PARAM, id).then(resp => {
    console.log(resp);
  });
});
