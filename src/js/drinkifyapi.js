import axios from 'axios';
// import Notiflix from 'notiflix';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';

async function fetchCocktails(link, param, paramValue) {
  const resp = await axios.get(`${BASE_URL}${link}?${param}=${paramValue}`);

  return resp.data;
}

export { fetchCocktails };
