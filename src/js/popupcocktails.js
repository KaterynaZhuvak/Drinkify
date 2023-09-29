import * as basicLightbox from 'basiclightbox';


const btnOpenModal = document.querySelector('.modal-window');

btnOpenModal.addEventListener('click', showModalWindow);

function showModalWindow() {
    const instance = basicLightbox.create(`<div class="container-popup">
  <button class="popup-close-btn">
    <svg class="popup-close-btn-icon">
      <use href="img/sprite.svg#popup-close-btn"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="" alt="" /></div>
    <div>
      <h2 class="name">Acid</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card">
        <li class="text item-card"><a href="">Ice</a></li>
        <li class="text item-card"><a href="">1 ounce gin</a></li>
        <li class="text item-card"><a href="">1 ounce Campari</a></li>
        <li class="text item-card"><a href="">1 ounce sweet vermouth</a></li>
        <li class="text item-card"><a href="">Garnish: orange peel</a></li>
      </ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card">
    Add the gin, Campari and sweet vermouth to a mixing glass filled with ice,
    and stir until well-chilled. Strain into a rocks glass filled with large ice
    cubes. Garnish with an orange peel.
  </p>
  <button type="button" class="button-card favorite-theme-light">
    add to favorite
  </button>
   <button type="button" class="button-card back-theme-light">Back</button>
</div>`)
    instance.show();
}











// Код з 7 ДЗ по хтмл

// function openClosePopup() {
//   const popup = document.querySelector('.js-popup-container');
//   const openPopupBtn = document.querySelector('.js-open-popup');
//   const closePopupBtn = document.querySelector('.js-close-popup');

//   const togglePopup = () => {
//     const isPopupOpen = openPopupBtn.getAttribute('aria-expanded') === 'true' || false;
//     openPopupBtn.setAttribute('aria-expanded', !isPopupOpen);
//     popup.classList.toggle('is-open');

//     const scrollLockMethod = !isPopupOpen ? 'disableBodyScroll' : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openPopupBtn.addEventListener('click', togglePopup);
//   closePopupBtn.addEventListener('click', togglePopup);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     popup.classList.remove('is-open');
//     openPopupBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// }

// function backdrop()  {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleBackdrop);
//   refs.closeModalBtn.addEventListener("click", toggleBackdrop);
  
//   function toggleBackdrop() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// }
// openClosePopup();
// backdrop();

