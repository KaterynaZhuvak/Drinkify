import spriteURL from '/img/sprite.svg';
import * as basicLightbox from 'basiclightbox';
import { onClickIn } from './popupingredients';
const list = document.querySelector('.favorite-ingredients-list');
const sorryImage = document.querySelector('.sorry-ingredients');
const favorite =
  JSON.parse(localStorage.getItem('KEY_FAVORITE_INGREDIENTS')) ?? [];

sorryImage.classList.add('hidden');
renderMarkup(favorite, list);

if (!favorite.length) {
  sorryImage.classList.remove('hidden');
}

list.addEventListener('click', onClick);

function renderMarkup(arr, container) {
  const markup = arr
    .map(card => {
      let isAcloholic = 'Alcoholic';
      if (card.abv === '0') {
        isAcloholic = 'Non-alcoholic';
      }
      return `<li class="in-card" data-id=${card.id}>
        <h3 class="in-card-title">${card.title}</h3>
        <p class="in-card-alco">${isAcloholic}</p>
        <p class="in-card-descr">${card.description || '-'}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="${spriteURL}#trash"></use>
                    </svg></button></div>
</li>`;
    })
    .join('');

  container.innerHTML = markup;
}

function onClick(e) {
  if (e.target.classList.contains('btn-learn-more')) {
    const ingredient = findIngredient(e.target);
    const instance = basicLightbox.create(
      `<div id="modal-ingredients" class="modal-in">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="./img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${
      ingredient.id
    }"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title">${
            ingredient.title
          }</h2>
          <p class="kind-in">${ingredient.type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-in">${
            ingredient.description || '-'
          }</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${
              ingredient.type || '-'
            }</li>
            <li class="ingredients-description">Country of origin: ${
              ingredient.country || '-'
            }</li>
            <li class="ingredients-description">Alcohol by volume: ${
              ingredient.abv || '-'
            }</li>
            <li class="ingredients-description">Flavour: ${
              ingredient.flavour || '-'
            }</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button class="btn-in remove-btn">REMOVE FROM FAVORITE</button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,
      {
        onShow: instance => {
          instance
            .element()
            .querySelector('.close-cocktail-modal-back').onclick =
            instance.close;
          instance.element().querySelector('.close-cocktail-modal-x').onclick =
            instance.close;
          instance
            .element()
            .querySelector('.remove-btn')
            .addEventListener('click', onRemoveClick);
          instance.element().querySelector('.remove-btn').onclick =
            instance.close;
        },
      }
    );
    instance.show();
  }
  if (e.target.closest('.btn-remove') || e.target.closest('.btn-in')) {
    removeIngredient(e);
    if (!favorite.length) {
      sorryImage.classList.remove('hidden');
    }
  }
}

function findIngredient(elem) {
  const ingredientId = elem.closest('.in-card').dataset.id;
  return favorite.find(({ id }) => id === ingredientId);
}

function removeIngredient(e) {
  const ingredient = findIngredient(e.target);
  const itemToRemove = favorite.findIndex(({ id }) => id === ingredient.id);
  favorite.splice(itemToRemove, 1);
  localStorage.setItem('KEY_FAVORITE_INGREDIENTS', JSON.stringify(favorite));
  renderMarkup(favorite, list);
}

function onRemoveClick(e) {
  const ingredientId = e.target.closest('.descripe-ingredients').dataset.id;
  const ingredient = favorite.find(({ id }) => id === ingredientId);
  const itemToRemove = favorite.findIndex(({ id }) => id === ingredient.id);
  favorite.splice(itemToRemove, 1);
  localStorage.setItem('KEY_FAVORITE_INGREDIENTS', JSON.stringify(favorite));
  renderMarkup(favorite, list);
}
