export function createMarkup({ drinkThumb, drink, description, _id }) {
  let markup = `<li data-id=${_id}>
        <img src="${drinkThumb}" alt="${drink}" width=300>
        <h3>${drink}</h3>
        <p>${description}</p>
        <button>learn</button><button>fav</button></li>`;
  return markup;
}
