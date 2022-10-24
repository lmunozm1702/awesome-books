const books = document.querySelector(".books-content");

let awesomeBooks = [];
let awesomeBooks2 = JSON.parse(localStorage.getItem("awesomeBooks"))||[];
let id = 0;

if (awesomeBooks.length > 0) {
  id = awesomeBooks[awesomeBooks.length - 1].id;
}

function updateLocalStorage() {
  localStorage.setItem("awesomeBooks", JSON.stringify(awesomeBooks));
}

function renderBooks() {
  awesomeBooks2.forEach((book) => {
    addBook(book.title, book.author);
  });
}

renderBooks();

function addBook(title, author) {
  let newBook = new Object();
  id += 1;
  newBook.id = id;
  newBook.title = title;
  newBook.author = author;
  awesomeBooks.push(newBook);

  let singleBook = document.createElement("div");
  singleBook.classList.add("single-book");
  singleBook.id = `Book${id}`;
  books.appendChild(singleBook);

  let titleDiv = document.createElement("div");
  titleDiv.textContent = title;
  singleBook.appendChild(titleDiv);

  let authorDiv = document.createElement("div");
  authorDiv.textContent = author;
  singleBook.appendChild(authorDiv);

  let buttonDiv = document.createElement("button");
  buttonDiv.textContent = "See Project";
  buttonDiv.id = `button_${id}`;
  buttonDiv.onclick = function () {
    removeBook(buttonDiv.id);
  };
  singleBook.appendChild(buttonDiv);
  updateLocalStorage();
}

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
  addBook(
    document.querySelector("#title").value,
    document.querySelector("#author").value
  );
});

function removeBook(id) {
  console.log(id);
  let [a, b] = id.split("_");
  console.log(b);
  awesomeBooks = awesomeBooks.filter((book) => book.id != b);
  //console.log(`#Book${id} `);
  document.querySelector(`#Book${b}`).remove();
  updateLocalStorage();
}
