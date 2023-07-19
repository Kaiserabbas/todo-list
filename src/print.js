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
  // Add more tasks as needed
];

const populateTodoList = () => {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');

  const parent = document.body;
  parent.insertBefore(header, parent.children[0]);

  const subHeader = document.createElement('div');
  subHeader.setAttribute('class', 'sub-header');
  header.appendChild(subHeader);

  const headerText = document.createElement('p');
  headerText.innerHTML = "Today's To Do";
  subHeader.appendChild(headerText);

  const refresh = document.createElement('i');
  refresh.setAttribute('class', 'glyphicon');
  refresh.innerHTML = '&#xe031;';
  subHeader.appendChild(refresh);

  const hr = document.createElement('hr');
  header.appendChild(hr);

  const headerInput = document.createElement('input');
  headerInput.setAttribute('placeholder', 'Add to your list');
  header.appendChild(headerInput);
  const hr1 = document.createElement('hr');
  header.appendChild(hr1);

  const todoList = document.getElementById('todo-list');
  tasks.forEach((task) => {
    const subTodoList = document.createElement('div');
    subTodoList.setAttribute('class', 'sub-todo-list');
    todoList.appendChild(subTodoList);

    const listItem = document.createElement('span');

    const inputCheckBox = document.createElement('input');
    inputCheckBox.setAttribute('type', 'checkbox');
    subTodoList.appendChild(inputCheckBox);

    // Set task description
    listItem.innerText = task.description;

    // Set completion status
    if (task.completed) {
      listItem.classList.add('completed');
    }

    // Set task index as a data attribute
    listItem.dataset.index = task.index;

    // Append the list item to the todo list
    subTodoList.appendChild(listItem);

    const handle = document.createElement('div');
    handle.setAttribute('class', 'handle');
    handle.innerHTML = '&#8942;';
    subTodoList.appendChild(handle);

    const hr2 = document.createElement('hr');
    todoList.appendChild(hr2);
  });
  const buttonClear = document.createElement('button');
  buttonClear.setAttribute('class', 'button-clear');
  buttonClear.innerHTML = 'Clear all completed';
  parent.insertBefore(buttonClear, parent.children[3]);
};

export default populateTodoList;
