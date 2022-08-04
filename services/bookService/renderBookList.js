export const renderBooksList = (books, domElement) => {
  if(!books.length) {
    return;
  }

  domElement.innerHTML = '';

  books.forEach(book => {
    const tr = document.createElement('tr');
    const tdBookName = document.createElement('td');
    tdBookName.innerHTML = book.name;

    const tdBookGenre = document.createElement('td');
    tdBookGenre.innerHTML = book.genre;
    
    tr.appendChild(tdBookName);
    tr.appendChild(tdBookGenre);

    domElement.appendChild(tr);
  })

}