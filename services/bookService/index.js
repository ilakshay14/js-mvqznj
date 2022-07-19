import { BOOKS } from '../../index.util';

const populateBooks = (event, htmlElementForBooks) => {
  const selectedGenre = event ? event.target.value : 'All';


  htmlElementForBooks.innerHTML = '';
  for (let i = 0; i < BOOKS.length; i++) {
    if (selectedGenre == 'All' || selectedGenre == BOOKS[i].genre) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + BOOKS[i].name + '</td>' + '<td>' + BOOKS[i].genre + '</td>';
      htmlElementForBooks.appendChild(tr);
    }
  }
};

export const init = (event, htmlElementForBooks) => {
  populateBooks(event, htmlElementForBooks);
};
