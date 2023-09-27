import { createMarkup } from './markup';
import { fetchRandomCocktails } from './drinkifyapi';

const cardsGallery = document.querySelector('.cardlist');

function createRandomCards() {
  let cardsAmount = 8;
  if (screen.width >= 1280) {
    cardsAmount = 9;
  }

  fetchRandomCocktails(cardsAmount)
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

createRandomCards();
