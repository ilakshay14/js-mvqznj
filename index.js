import { init as initGenres } from './services/genreService';
import { init as initBooks } from './services/bookService';

const booksTable = document.getElementById('books');

const genreMenuElement = document.getElementById('genres');
genreMenuElement.addEventListener("change", (e)=> initBooks(e, booksTable));

initGenres(genreMenuElement);
initBooks(null, booksTable);


