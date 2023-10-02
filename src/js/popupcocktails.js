import { fetchCocktails } from './drinkifyapi';
import * as basicLightbox from 'basiclightbox';
import { onIngrListClickHandler } from './popupingredients';
import spriteURL from '/img/sprite.svg';

const KEY_FAVORITE_COCKTAILS = 'favoriteCocktails';
const cardsGallery = document.querySelector('.cardlist');
const SEARCH_BY_ID_LINK = 'cocktails/lookup/';
const SEARCH_BY_ID_PARAM = 'id';
const favCokctArr =
  JSON.parse(localStorage.getItem(KEY_FAVORITE_COCKTAILS)) ?? [];
let cocktailObj;

cardsGallery.addEventListener('click', onLearnMoreClickHandler);

// const scrollController = {
//   disabledScroll() {
//     document.body.style.cssText = `
//     overflow: hidden;
//     `;
//   },
//   enabledScroll() {
//     document.body.style.cssText = '';
//   }
// }

async function onLearnMoreClickHandler(e) {
  if (!e.target.classList.contains('cardlist-learn')) {
    return;
  }

  const id = e.target.closest('.cardlist-item').dataset.id;
  await fetchCocktails(SEARCH_BY_ID_LINK, SEARCH_BY_ID_PARAM, id).then(resp => {
    const { _id, drinkThumb, instructions, drink, ingredients, description } =
      resp[0];

    cocktailObj = {
      _id,
      drinkThumb,
      description,
      drink,
    };

    let ingredientsRaw = ingredients
      .map(ingredient => {
        return `<li data-id="${
          ingredient.ingredientId
        }" class="text item-card"><a href="#" class="ingredient-btn">${
          ingredient.measure || ''
        }${ingredient.title}</a></li>`;
      })
      .join('');

    showModalWindow(id, ingredientsRaw, drink, instructions, drinkThumb);
  });
}

function showModalWindow(id, ingredientsRaw, drink, instructions, drinkThumb) {
  const instance = basicLightbox.create(
    `<div class="container-popup" data-id="${id}">
  <button class="popup-close-btn close-cocktail-modal-x">
    <svg class="popup-close-btn-icon">
      <use href="${spriteURL}#cross"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="${drinkThumb}" alt="${drink}" onerror="this.onerror=null;this.src='img/rafiki.jpg';"/></div>
    <div>
      <h2 class="name">${drink}</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card ingredients-list">${ingredientsRaw}</ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card">
   ${instructions}
  </p>
  <button type="button" class="button-card favorite add-to-fav-cockt" data-id="${id}">
    add to favorite
  </button>
   <button type="button" class="visually-hidden button-card favorite remove-from-fav-cockt" data-id="${id}">
    Remove from favorite
  </button>
   <button type="button" class="button-card back close-cocktail-modal-back">Back</button>
</div>`,
    {
      onShow: instance => {
        console.log(instance.element());
        instance.element().querySelector('.close-cocktail-modal-back').onclick =
          instance.close;
        instance.element().querySelector('.close-cocktail-modal-x').onclick =
          instance.close;
        instance
          .element()
          .querySelector('.favorite')
          .addEventListener('click', onClickFavAddRemoveHandler);
        // scrollController.enabledScroll();
      },
      onClose: instance => {
        instance
          .element()
          .querySelector('.favorite')
          .removeEventListener('click', onClickFavAddRemoveHandler);
      },
    }
  );
  instance.show();
  // scrollController.disabledScroll();
  document
    .querySelector('.ingredients-list')
    .addEventListener('click', onIngrListClickHandler);
}

function onClickFavAddRemoveHandler(e) {
  e.preventDefault();

  if (e.target.classList.contains('favorite')) {
    const ifCocktailInStorage = favCokctArr.find(
      ({ id }) => id === e.target.dataset.id
    );
    if (ifCocktailInStorage) {
      return;
    }
    favCokctArr.push(cocktailObj);
    localStorage.setItem(KEY_FAVORITE_COCKTAILS, JSON.stringify(favCokctArr));
  }
}

export {
  // scrollController,
  onLearnMoreClickHandler,
  showModalWindow,
  SEARCH_BY_ID_LINK,
  SEARCH_BY_ID_PARAM,
};
