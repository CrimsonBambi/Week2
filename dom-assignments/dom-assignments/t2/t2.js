// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Buy Milk',
    completed: true,
  },
  {
    id: 2,
    task: 'Buy Eggs',
    completed: false,
  },
  {
    id: 3,
    task: 'Buy Bread',
    completed: false,
  }
];

// add your code here

const ul = document.querySelector('ul'); // selects the first ul-element from the document

for (let item of todoList) {
  const li = document.createElement('li');

  const input = document.createElement('input');
  const label = document.createElement('label');
  
  input.type = 'checkbox';
  input.id = `todo-${item.id}`;
  input.checked = item.completed; // checks if it is true or false

  label.htmlFor = `todo-${item.id}`;
  label.textContent = item.task;

  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);
} 
