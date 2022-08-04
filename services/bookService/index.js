import { BOOKS } from '../../index.util';
import { renderBooksList } from './renderBookList';

const populateBooks = (event, htmlElementForBooks) => {
  const selectedGenre = event ? event.target.value : 'All';

  const bookList = selectedGenre === 'All'? BOOKS : BOOKS.filter(book => book.genre === selectedGenre);

  renderBooksList(bookList, htmlElementForBooks)
};

export const init = (event, htmlElementForBooks) => {
  populateBooks(event, htmlElementForBooks);
};
