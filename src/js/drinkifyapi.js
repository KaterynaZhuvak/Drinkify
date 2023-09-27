import axios from 'axios';
// import Notiflix from 'notiflix';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';

async function fetchRandomCocktails(cardsAmount) {
  const resp = await axios.get(`${BASE_URL}cocktails/?r=${cardsAmount}`);

  return resp.data;
}

export { fetchRandomCocktails };
