import { fetchIngredients } from './drinkifyapi';
import * as basicLightbox from 'basiclightbox';

// const KEY_FAVORITE_INGREDIENTS = 'FavIngrArr';
const SEARCH_BY_ID_LINK = 'ingredients/';
const favoriteArrIn =
  JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS")) ?? [];
let ingredientObj;
function onIngrListClickHandler(e) {
  e.preventDefault();
  const IngrId = e.target.closest('.item-card').dataset.id;
  fetchIngredients(SEARCH_BY_ID_LINK, IngrId).then(resp => {
    const {
      _id: id,
      title,
      description,
      type,
      abv,
      flavour,
      country,
    } = resp[0];
    ingredientObj = {
      id,
      title,
      description,
      type,
      abv,
      flavour,
      country,
    };
    showModalWindow(ingredientObj);
  });
}
function showModalWindow(ingredientObj) {
  const { id, title, description, type, abv, flavour, country } = ingredientObj;
  const instance = basicLightbox.create(
    `
    <div id="modal-ingredients" class="modal-in theme-dark container-popup">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="../img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${id}"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title theme-dark">${title}</h2>
          <p class="kind-in theme-dark">${type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-ing theme-dark">${
            description || 'На жаль дані тимчасово відсутні'
          }</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description theme-dark">Type: ${type}</li>
            <li class="ingredients-description theme-dark">Country of origin: ${country}</li>
            <li class="ingredients-description theme-dark">Alcohol by volume: ${abv}</li>
            <li class="ingredients-description theme-dark">Flavour: ${flavour}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button type="button" id="btn-in" class="btn-in js-btningr">
            ADD TO FAVORITE
          </button>
          <button type="button" id="btn-in" class="is-hidden btn-in js-btningr">
            Remove from favorite
          </button>
          <button type="button" id="btn-back" class="btn-in btn-back  theme-dark close-cocktail-modal-back">
            BACK
          </button>
          </div>
          </div>
          `,
    {
      onShow: instance => {
        instance.element().querySelector('.close-cocktail-modal-back').onclick =
          instance.close;
        instance.element().querySelector('.close-cocktail-modal-x').onclick =
          instance.close;
        instance
          .element()
          .querySelector('.js-btningr')
          .addEventListener('click', onClickIn);
      },
    }
  );
  instance.show();
}
function onClickIn(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-btningr')) {
    const inStorageIn = favoriteArrIn.find(({ id }) => id === ingredientObj.id);
    if (inStorageIn) {
      return;
    }
    favoriteArrIn.push(ingredientObj);
    localStorage.setItem(
      'KEY_FAVORITE_INGREDIENTS',
      JSON.stringify(favoriteArrIn)
    );
  }
}
export { onIngrListClickHandler };
export { onClickIn };
