import { searchCoctailsByLetter, cardsGallery } from './search';

const openBtn = document.querySelector('.open-alphabet-btn')
const lettersMenu = document.querySelector('.alphabet-list');
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

function menuMarkup(arr) {
  return arr
    .map(
      letter =>
        `<li class='letter-item'><a href='#' class='letter-link'>${letter}</a></li>`
    )
    .join('');
}

openBtn.addEventListener('click', () => {
  if (lettersMenu.classList.contains('display') === true) {
    lettersMenu.classList.remove('display');
lettersMenu.insertAdjacentHTML('afterbegin', menuMarkup(alphabet));
  } else {
    lettersMenu.classList.add('display');
  }
});

lettersMenu.addEventListener('click', e => {
  e.preventDefault();
  const currentLetter = e.target.textContent;
  openBtn.textContent = currentLetter

  cardsGallery.innerHTML = '';

  searchCoctailsByLetter(e.target.textContent);
});
