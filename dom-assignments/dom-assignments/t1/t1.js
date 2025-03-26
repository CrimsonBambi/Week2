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

for (item of todoList) {
  const li = `<li> 
  <input type="checkbox" id="todo-${item.id}" ${item.completed ? "checked" : ""}>
  <label for="todo-${item.id}">${item.task}</label>
  </li>`; 
  ul.insertAdjacentHTML("beforeend", li); // position,text 
} 