import { BOOKS } from '../../index.util';

function getGenres(items) {
  const retVal = ['All'];

  for (let i = 0; i < items.length; i++) {
    if (!retVal.includes(items[i].genre)) {
      retVal.push(items[i].genre);
    }
  }
  return retVal.sort();
}

function populateGenres(htmlElementForGenre, items) {

  for (let i = 0; i < items.length; i++) {
    const option = document.createElement('option');
    option.value = items[i];
    option.text = items[i];
    htmlElementForGenre.appendChild(option);
  }
}

export const init = (htmlElementForGenre) => {
  const genres = getGenres(BOOKS);
  populateGenres(htmlElementForGenre, genres);
};
