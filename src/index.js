/* importing files from the modules */
import './modules/index.css';
import {
  saveTasks,
  addTasks,
  showTasks,
  tasksForm,
  tasks,
} from './modules/print.js';

document.addEventListener('DOMContentLoaded', () => {
  saveTasks();
  showTasks();
  tasksForm.addEventListener('submit', addTasks);
  tasksForm.addEventListener('submit', showTasks);
});
