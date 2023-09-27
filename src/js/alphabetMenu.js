const menu = document.querySelector('.alphabet-menu');
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function menuMarkup(arr) {
    return arr.map(letter => `<ul class='alphabet-list'>
          <li class='letter-item'><a class='letter-link'>${letter}</a></li>
        </ul>`).join('')
};

menu.insertAdjacentHTML('afterbegin', menuMarkup(alphabet));


