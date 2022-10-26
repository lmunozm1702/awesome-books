import Book from './books.js';

const books = document.querySelector('.books-content');
class AwesomeBooks {
  constructor(
    awesomeBooks = [],
    awesoneBooks2 = JSON.parse(localStorage.getItem('awesomeBooks')) || [],
  ) {
    this.awesomeBooks = awesomeBooks;
    this.awesomeBooks2 = awesoneBooks2;
    this.id = 0;
  }

  renderBooks() {
    this.awesomeBooks2.forEach((book) => {
      this.addBook(book);
    });
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
    titleDiv.textContent = `'${Book.title}' by  ${Book.author}`;
    singleBook.appendChild(titleDiv);

    const buttonDiv = document.createElement('button');
    buttonDiv.textContent = 'Remove';
    buttonDiv.id = `button_${Book.id}`;
    buttonDiv.onclick = () => {
      this.removeBook(Book.id);
    };
    singleBook.appendChild(buttonDiv);
    this.addToLocalStorage();
  }

  addToLocalStorage() {
    localStorage.setItem('awesomeBooks', JSON.stringify(this.awesomeBooks));
  }

  removeBook(id) {
    this.awesomeBooks = this.awesomeBooks.filter(
      (book) => book.id.toString() !== id.toString(),
    );
    document.querySelector(`#Book${id}`).remove();
    this.addToLocalStorage();
  }
}

const myLibrary = new AwesomeBooks();
myLibrary.renderBooks();

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  const newBook = new Book(document.querySelector('#title').value, document.querySelector('#author').value);
  myLibrary.addBook(newBook);
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
});

const navClickList = document.querySelector('#list-link');
const navClickAdd = document.querySelector('#add-link');
const navClickContact = document.querySelector('#contact-link');

const navList = document.querySelector('#list');
const navAdd = document.querySelector('#add');
const navContact = document.querySelector('#contact');

navClickList.addEventListener('click', () => {
  navList.classList = ('show-section');
  navClickList.classList = ('active');
  navClickAdd.classList.remove('active');
  navClickContact.classList.remove('active');
  navAdd.classList = ('hide-section');
  navContact.classList = ('hide-section');
});

navClickAdd.addEventListener('click', () => {
  navList.classList = ('hide-section');
  navAdd.classList = ('show-section');
  navClickAdd.classList = ('active');
  navClickList.classList.remove('active');
  navClickContact.classList.remove('active');
  navContact.classList = ('hide-section');
});

navClickContact.addEventListener('click', () => {
  navList.classList = ('hide-section');
  navAdd.classList = ('hide-section');
  navContact.classList = ('show-section');
  navClickContact.classList = ('active');
  navClickList.classList.remove('active');
  navClickAdd.classList.remove('active');
});

function setCurrentTime() {
  const n = new Date();
  const y = n.getFullYear();
  const m = n.toLocaleString('default', { month: 'long' });
  const d = n.getDate();

  const h = n.getHours();
  let mm = n.getMinutes();
  if (mm < 10) { mm = `0${mm}`; }
  let s = n.getSeconds();
  if (s < 10) { s = `0${s}`; }

  document.querySelector('#date_time').textContent = `${m} ${d}th ${y}, ${h}:${mm}:${s}`;
}

setInterval(() => {
  setCurrentTime();
}, 1000);
