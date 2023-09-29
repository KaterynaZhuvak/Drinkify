function openClosePopup() {
  const popup = document.querySelector('.js-popup-container');
  const openPopupBtn = document.querySelector('.js-open-popup');
  const closePopupBtn = document.querySelector('.js-close-popup');

  const togglePopup = () => {
    const isPopupOpen = openPopupBtn.getAttribute('aria-expanded') === 'true' || false;
    openPopupBtn.setAttribute('aria-expanded', !isPopupOpen);
    popup.classList.toggle('is-open');

    const scrollLockMethod = !isPopupOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openPopupBtn.addEventListener('click', togglePopup);
  closePopupBtn.addEventListener('click', togglePopup);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    popup.classList.remove('is-open');
    openPopupBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
}

function backdrop()  {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleBackdrop);
  refs.closeModalBtn.addEventListener("click", toggleBackdrop);
  
  function toggleBackdrop() {
    refs.modal.classList.toggle("is-hidden");
  }
}
openClosePopup();
backdrop();

export { openClosePopup, backdrop };

