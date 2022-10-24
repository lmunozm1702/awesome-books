const awesomeBooks = [];
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

