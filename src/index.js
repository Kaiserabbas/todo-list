/* eslint-disable */ /*importing files from the modules*/
import _ from 'lodash';
import './index.css';
import { saveTasks, addTasks, showTasks, tasksForm } from './print.js';

document.addEventListener('DOMContentLoaded', () => {
  saveTasks();
  showTasks();
  tasksForm.addEventListener('submit', addTasks);
  tasksForm.addEventListener('submit', showTasks);
});
