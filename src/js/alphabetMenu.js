import { searchCoctailsByLetter, cardsGallery } from './search';

const menu = document.querySelector('.alphabet-list');
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

menu.addEventListener('click', () => {
  lettersMenu.insertAdjacentHTML('afterbegin', menuMarkup(alphabet));
});

lettersMenu.addEventListener('click', e => {
  e.preventDefault();

  // if (e.target.nodeName !== 'BUTTON') {
  //   return;
  // }

  cardsGallery.innerHTML = '';

  searchCoctailsByLetter(e.target.textContent);
});
