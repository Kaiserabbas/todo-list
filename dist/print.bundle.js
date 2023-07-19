"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([[1],{

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateTodoList: () => (/* binding */ populateTodoList)
/* harmony export */ });
// export const printMe = () => {
//   let x = 10;
//   let y = 50;
//   console.log(x * y);
//   console.log('I get called from print.js!');
// };
// export const date = () => {
//   const dateToday = new Date();
//   const date = document.getElementById('date');
//   date.innerHTML = `Date: ${dateToday}`;
// };

const tasks = [
  {
    description: 'Buy groceries',
    completed: false,
    index: 0,
  },
  {
    description: 'Finish homework',
    completed: true,
    index: 1,
  },
  {
    description: 'Call a friend',
    completed: false,
    index: 2,
  },
  {
    description: 'Buy groceries',
    completed: false,
    index: 0,
  },
  {
    description: 'Finish homework',
    completed: true,
    index: 1,
  },
  {
    description: 'Call a friend',
    completed: false,
    index: 2,
  },
  // Add more tasks as needed
];

const populateTodoList = () => {
  const todoList = document.getElementById('todo-list');

  // Clear existing list items
  todoList.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index); // Sort tasks by index

  tasks.forEach((task) => {
    const listItem = document.createElement('li');

    // Set task description
    listItem.textContent = task.description;

    // Set completion status
    if (task.completed) {
      listItem.classList.add('completed');
    }

    // Set task index as a data attribute
    listItem.dataset.index = task.index;

    // Append the list item to the todo list
    todoList.appendChild(listItem);
  });
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(12));
/******/ }
]);