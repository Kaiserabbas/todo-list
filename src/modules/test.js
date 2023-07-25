// Import the functions to be tested
import { Task, updateIndexes, addTasks, removeTask, showTasks } from './print';

// Mock local storage
let localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Task functions', () => {
  beforeEach(() => {
    // Clear the local storage and reset tasks array before each test
    localStorage.clear();
    Task.tasks = [];
  });

  describe('addTasks', () => {
    test('should add a task to the tasks array and update local storage', () => {
      Task.addTasks('Test Task', false, 1);
      expect(Task.tasks).toHaveLength(1);
      expect(Task.tasks[0].description).toBe('Test Task');
      expect(Task.tasks[0].completed).toBe(false);
      expect(localStorage.getItem('tasks')).toBe(JSON.stringify(Task.tasks));
    });
  });

  describe('removeTask', () => {
    test('should remove a task from the tasks array and update local storage', () => {
      Task.addTasks('Task 1', false, 1);
      Task.addTasks('Task 2', false, 2);
      Task.addTasks('Task 3', false, 3);

      Task.removeTask(2);
      expect(Task.tasks).toHaveLength(2);
      expect(Task.tasks[0].description).toBe('Task 1');
      expect(Task.tasks[1].description).toBe('Task 3');
      expect(localStorage.getItem('tasks')).toBe(JSON.stringify(Task.tasks));
    });

    test('should not remove any task if the index is out of bounds', () => {
      Task.addTasks('Task 1', false, 1);
      Task.addTasks('Task 2', false, 2);

      Task.removeTask(3); // index is out of bounds
      expect(Task.tasks).toHaveLength(2);
      expect(localStorage.getItem('tasks')).toBe(JSON.stringify(Task.tasks));
    });
  });

  describe('updateIndexes', () => {
    test('should update the indexes of tasks in the array', () => {
      Task.addTasks('Task 1', false, 1);
      Task.addTasks('Task 2', false, 2);
      Task.addTasks('Task 3', false, 3);

      updateIndexes();

      expect(Task.tasks[0].index).toBe(1);
      expect(Task.tasks[1].index).toBe(2);
      expect(Task.tasks[2].index).toBe(3);
    });
  });

  // Since addTasks, removeTask, and showTasks interact with the DOM, we'll only test their presence
  // and the event listeners.
  describe('DOM manipulation functions', () => {
    test('addTasks function should be defined', () => {
      expect(addTasks).toBeDefined();
    });

    test('removeTask function should be defined', () => {
      expect(removeTask).toBeDefined();
    });

    test('showTasks function should be defined', () => {
      expect(showTasks).toBeDefined();
    });

    // Add more tests for DOM manipulation functions if needed
  });
});
