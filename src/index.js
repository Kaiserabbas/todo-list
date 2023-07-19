import _ from 'lodash';
import './index.css';
import {
  // headSection,
  saveBooks,
  addBooks,
  removeBook,
  showBooks,
  bookForm,
} from './print.js';
document.addEventListener('DOMContentLoaded', () => {
  // headSection();
  saveBooks;
  addBooks();
  removeBook();
  showBooks();
  bookForm.addEventListener('submit', addBooks);
  bookForm.addEventListener('submit', showBooks);
});
