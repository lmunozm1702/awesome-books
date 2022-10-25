const books = document.querySelector('.books-content');

function deleteBook(id) {
  const [a, b] = id.split('_');
  myLibrary.removeBook(b);
  console.log(myLibrary);
  return a;
}
class AwesomeBooks {
  constructor(awesomeBooks = []) {
    this.awesomeBooks = awesomeBooks;
    this.id = 0;
  }

  addBook(Book) {
    Book.id = this.id + 1;
    this.id += 1;

    this.awesomeBooks.push(Book);

    const singleBook = document.createElement('div');
    singleBook.classList.add('single-book');
    singleBook.id = `Book${Book.id}`;
    books.appendChild(singleBook);

    const titleDiv = document.createElement('div');
    titleDiv.textContent = Book.title;
    singleBook.appendChild(titleDiv);

    const authorDiv = document.createElement('div');
    authorDiv.textContent = Book.author;
    singleBook.appendChild(authorDiv);

    const buttonDiv = document.createElement('button');
    buttonDiv.textContent = 'Remove';
    buttonDiv.id = `button_${Book.id}`;
    buttonDiv.onclick = function () {
      deleteBook(buttonDiv.id);
    };
    singleBook.appendChild(buttonDiv);
    //updateLocalStorage();
  }

  removeBook(id) {
    this.awesomeBooks = this.awesomeBooks.filter((book) => book.id.toString() !== id.toString());
    document.querySelector(`#Book${id}`).remove();
    //updateLocalStorage();
  }
}
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = 0;
  }
}

const myLibrary = new AwesomeBooks();

/*
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
  const [a, b] = id.split('_');
  awesomeBooks = awesomeBooks.filter((book) => book.id.toString() !== b.toString());
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
  buttonDiv.textContent = 'Remove';
  buttonDiv.id = `button_${id}`;
  buttonDiv.onclick = function () {
    removeBook(buttonDiv.id);
  };
  singleBook.appendChild(buttonDiv);
  updateLocalStorage();
}
*/

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  const newBook = new Book(document.querySelector('#title').value, document.querySelector('#author').value);
  myLibrary.addBook(newBook);
  console.log(myLibrary);
});

