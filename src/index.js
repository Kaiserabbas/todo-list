import _ from 'lodash';
import './index.css';
import {
  saveTasks,
  addTasks,
  showTasks,
  tasksForm,
  removeTask,
  tasks,
} from './print.js';
document.addEventListener('DOMContentLoaded', () => {
  saveTasks();
  showTasks();
  tasksForm.addEventListener('submit', addTasks);
  tasksForm.addEventListener('submit', showTasks);
});
