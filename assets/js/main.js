let awesomeBooks = [];
let id = 0

if (awesomeBooks.length > 0) {
  id = awesomeBooks[awesomeBooks.length - 1].id;
}

function addBook(title, author) {
  let newBook = new Object();
  id += 1;
  newBook.id = id;
  newBook.title = title;
  newBook.author = author;
  awesomeBooks.push(newBook);


}

const addButton = document.querySelector("#add-button");
addButton.addEventListener('click', () => {
  addBook(document.querySelector("#title").value, document.querySelector("#author").value);
  console.log(awesomeBooks)
})


const books = document.querySelector('.books-content');

function removeBook(id) {
  awesomeBooks = awesomeBooks.filter((book) => book.id != id);
  books.querySelector(`#Book${id}`).remove();
}

awesomeBooks.forEach((book) => {
  books.innerHTML += `
  <div class="single-book" id="Book${book.id}">
      <div class="title">${book.title}</div>
      <div class="author">${book.author}</div>
      <button>remove</button>
    </div>
  `;
  const Button = document.querySelector("button");
  Button.addEventListener('click', () => {
    removeBook(book.id);
  })
})

