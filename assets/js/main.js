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
    buttonDiv.onclick = event => {
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
