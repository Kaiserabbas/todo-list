/* eslint-disable */ // Retrieve books from local storage if available

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save books to local storage
export const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
// Defining a class for Book
export class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static addTasks(description, completed, index) {
    const task = new Task(description, completed, index);
    tasks.push(task);
    updateIndexes();
    saveTasks();
  }

  static removeTask(index) {
    if (index < 1 || index > tasks.length) {
      return;
    }
    tasks.splice(index - 1, 1);
    // Save the books to local storage
    updateIndexes();
    saveTasks();
  }
}
export const updateIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
};
const parent = document.body;

export const headerText = document.createElement('h3');
headerText.innerHTML = `Today's To Do`;
parent.insertBefore(headerText, parent.children[0]);

export const tasksForm = document.createElement('form');
tasksForm.setAttribute('id', 'form');

parent.insertBefore(tasksForm, parent.children[1]);

export const inputForm = document.createElement('input');
inputForm.setAttribute('id', 'input-form');
inputForm.setAttribute('placeholder', 'Add to your list...');
tasksForm.appendChild(inputForm);

const formButton = document.createElement('button');
formButton.setAttribute('type', 'submit');
formButton.setAttribute('class', 'form-input-button');
formButton.innerHTML = 'add task';
tasksForm.appendChild(formButton);

const hr1 = document.createElement('hr');
tasksForm.appendChild(hr1);

export const addTasks = (event) => {
  event.preventDefault();
  // Getting the input values against variables
  const title = inputForm.value;

  // Add book using the Book class method
  Task.addTasks(title);

  // Clearing the input values after the user clicks the add button
  inputForm.value = '';

  // Update the books list
  // eslint-disable-next-line no-use-before-define
  showTasks();
};

export const removeTask = (index) => {
  // Remove the book using the Book class method
  Task.removeTask(index);

  // Update the book list
  // eslint-disable-next-line no-use-before-define
  showTasks();
};

// Function to display the books in the list
export const showTasks = () => {
  const taskList = document.getElementById('todo-list');

  // Clear the existing list
  taskList.innerHTML = '';

  // Create a new list item for each book
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const tasksDiv = document.createElement('div');
    tasksDiv.setAttribute('class', 'tasks-div');

    const inputCheckBox = document.createElement('input');
    inputCheckBox.setAttribute('type', 'checkbox');
    inputCheckBox.addEventListener('change', () => {
      if (inputCheckBox.checked) {
        listItemTitle.style.textDecoration = 'line-through';
      } else {
        listItemTitle.style.textDecoration = 'none';
      }
    });

    tasksDiv.appendChild(inputCheckBox);

    const listItemTitle = document.createElement('p');
    listItemTitle.innerHTML = `${task.description}`;
    tasksDiv.appendChild(listItemTitle);

    // Create a button to remove the book
    const removeButton = document.createElement('span');
    removeButton.setAttribute('class', 'close');
    removeButton.getAttribute('id', 'remove-icon');
    removeButton.innerHTML = '🗑';
    removeButton.addEventListener('click', (event) => {
      const removeButtonParent = event.target.parentNode;
      taskList.removeChild(removeButtonParent);
      taskList.removeChild(hr3);
    });

    tasksDiv.appendChild(removeButton);
    inputCheckBox.addEventListener('change', (event) => {
      handle.style.display = 'none';
      const listItem = event.target.parentNode;
      const removeButton = listItem.querySelector('.close');
      removeButton.style.margin = '0 15px 0 0';
      handle.style.display = event.target.checked ? 'none' : 'inline';
      removeButton.style.display = event.target.checked ? 'inline' : 'none';
    });

    // Create the handle for dragging
    const handle = document.createElement('span');
    handle.setAttribute('class', 'handle');
    handle.innerHTML = '&#8942;';
    tasksDiv.appendChild(handle);

    // Add event listener to the list item for editing
    listItemTitle.addEventListener('click', () => {
      listItemTitle.contentEditable = true;
      listItemTitle.focus();
    });

    // Add event listener to handle changes in the edited list item
    listItemTitle.addEventListener('blur', () => {
      listItemTitle.contentEditable = false;
      // Update the book title in the array
      tasks[i].description = listItemTitle.innerHTML;
      saveTasks(); // Save the updated book list to local storage
    });

    // Append the books, author, and remove button to the book list
    taskList.appendChild(tasksDiv);
    const hr3 = document.createElement('hr');
    taskList.appendChild(hr3);
  }

  // Create "Clear All Completed" button
  const clearCompletedButton = document.createElement('button');
  clearCompletedButton.setAttribute('class', 'clear-button');
  clearCompletedButton.textContent = 'Clear All Completed';
  clearCompletedButton.addEventListener('click', function () {
    const completedCheckboxes = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    );

    completedCheckboxes.forEach((checkbox) => {
      const index = parseInt(checkbox.dataset.index);

      removeTask(index);
      showTasks(); // Update the book list after removal
    });
  });

  // Append "Clear All Completed" button to the book list
  taskList.appendChild(clearCompletedButton);
};

// Add event listener to the form submission
tasksForm.addEventListener('submit', addTasks);
tasksForm.addEventListener('submit', showTasks);
showTasks();
