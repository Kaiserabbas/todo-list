"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([[1],{

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Book: () => (/* binding */ Book),
/* harmony export */   addBooks: () => (/* binding */ addBooks),
/* harmony export */   bookForm: () => (/* binding */ bookForm),
/* harmony export */   removeBook: () => (/* binding */ removeBook),
/* harmony export */   saveBooks: () => (/* binding */ saveBooks),
/* harmony export */   showBooks: () => (/* binding */ showBooks)
/* harmony export */ });
/* eslint-disable no-plusplus */
// Retrieve books from local storage if available

const books = JSON.parse(localStorage.getItem('books')) || [];

// Function to save books to local storage
const saveBooks = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

// Defining a class for Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(title, author) {
    const book = new Book(title, author);
    books.push(book);

    // Save the books to local storage
    saveBooks();
  }

  static removeBook(index) {
    books.splice(index, 1);

    // Save the books to local storage
    saveBooks();
  }
}

// Create a function to add books by user through form inputs
const addBooks = (event) => {
  // Prevents default form submission
  event.preventDefault();

  // Getting the input values against variables
  const titleInput = document.getElementById('title');
  const title = titleInput.value;

  // Add book using the Book class method
  Book.addBook(title);

  // Clearing the input values after the user clicks the add button
  titleInput.value = '';

  // Update the books list
  // eslint-disable-next-line no-use-before-define
  showBooks();
};

// Removing the book from the list when the remove button is clicked
const removeBook = (index) => {
  // Remove the book using the Book class method
  Book.removeBook(index);

  // Update the book list
  // eslint-disable-next-line no-use-before-define
  showBooks();
};

// Function to display the books in the list
const showBooks = () => {
  const bookList = document.getElementById('added-books');

  // Clear the existing list
  bookList.innerHTML = '';

  // Create a new list item for each book
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const booksDiv = document.createElement('div');
    booksDiv.setAttribute('class', 'books-div');

    if (i % 2 === 0) {
      booksDiv.style.backgroundColor = '#fff';
    } else {
      booksDiv.style.backgroundColor = '#dddcdc';
    }
    const inputCheckBox = document.createElement('input');
    inputCheckBox.setAttribute('type', 'checkbox');

    inputCheckBox.addEventListener('change', () => {
      if (inputCheckBox.checked) {
        listItemTitle.style.textDecoration = 'line-through';
      } else {
        listItemTitle.style.textDecoration = 'none';
      }
    });

    booksDiv.appendChild(inputCheckBox);

    const listItemTitle = document.createElement('p');
    listItemTitle.innerHTML = `${book.title}`;
    booksDiv.appendChild(listItemTitle);

    // Create a button to remove the book
    const removeButton = document.createElement('span');
    removeButton.setAttribute('class', 'close glyphicon');
    removeButton.innerHTML = '&#xe020;';
    removeButton.addEventListener('click', function () {
      removeBook(i);
      showBooks(); // Update the book list after removal
    });
    booksDiv.appendChild(removeButton);

    // Create the handle for dragging
    const handle = document.createElement('span');
    handle.setAttribute('class', 'handle');
    handle.innerHTML = '&#8942;';
    booksDiv.appendChild(handle);

    // Add event listener to the list item for editing
    listItemTitle.addEventListener('click', function () {
      listItemTitle.contentEditable = true;
      listItemTitle.focus();

      // Show the remove button only during editing
      removeButton.style.display = 'block';
      // Hide the handle during editing
      handle.style.display = 'none';
    });

    // Add event listener to handle changes in the edited list item
    listItemTitle.addEventListener('blur', function () {
      listItemTitle.contentEditable = false;

      // Hide the remove button after editing is complete
      removeButton.style.display = 'none';

      // Show the handle again after editing is complete
      handle.style.display = 'inline';

      // Update the book title in the array
      books[i].title = listItemTitle.innerHTML;
      saveBooks(); // Save the updated book list to local storage
    });

    // Append the books, author, and remove button to the book list
    bookList.appendChild(booksDiv);
  }

  // Create "Clear All Completed" button
  const clearCompletedButton = document.createElement('button');
  clearCompletedButton.textContent = 'Clear All Completed';
  clearCompletedButton.addEventListener('click', function () {
    const completedCheckboxes = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    );
    completedCheckboxes.forEach((checkbox) => {
      const index = parseInt(checkbox.dataset.index);
      removeBook(index);
      showBooks(); // Update the book list after removal
    });
  });

  // Append "Clear All Completed" button to the book list
  bookList.appendChild(clearCompletedButton);
};

// Add event listener to the form submission
const bookForm = document.getElementById('form');
bookForm.addEventListener('submit', addBooks);
bookForm.addEventListener('submit', showBooks);
showBooks();
// Add event listener to the form submission


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(12));
/******/ }
]);