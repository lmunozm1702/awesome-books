const books = document.querySelector('.books-content');

let awesomeBooks = [];
const awesomeBooks2 = JSON.parse(localStorage.getItem('awesomeBooks')) || [];
let id = 0;

if (awesomeBooks.length > 0) {
  id = awesomeBooks[awesomeBooks.length - 1].id;
}

function updateLocalStorage() {
  localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
}

function removeBook(id) {
  console.log(id);
  const [a, b] = id.split('_');
  console.log(b);
  awesomeBooks = awesomeBooks.filter((book) => book.id !== b);
  document.querySelector(`#Book${b}`).remove();
  updateLocalStorage();
  return a;
}

function addBook(title, author) {
  const newBook = {};
  id += 1;
  newBook.id = id;
  newBook.title = title;
  newBook.author = author;
  awesomeBooks.push(newBook);

  const singleBook = document.createElement('div');
  singleBook.classList.add('single-book');
  singleBook.id = `Book${id}`;
  books.appendChild(singleBook);

  const titleDiv = document.createElement('div');
  titleDiv.textContent = title;
  singleBook.appendChild(titleDiv);

  const authorDiv = document.createElement('div');
  authorDiv.textContent = author;
  singleBook.appendChild(authorDiv);

  const buttonDiv = document.createElement('button');
  buttonDiv.textContent = 'See Project';
  buttonDiv.id = `button_${id}`;
  buttonDiv.onclick = function () {
    removeBook(buttonDiv.id);
  };
  singleBook.appendChild(buttonDiv);
  updateLocalStorage();
}

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  addBook(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
  );
});

function renderBooks() {
  awesomeBooks2.forEach((book) => {
    addBook(book.title, book.author);
  });
}
renderBooks();
