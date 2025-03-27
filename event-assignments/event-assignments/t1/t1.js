// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Buy Milk',
    completed: false,
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
const modal = document.getElementById('modal');

const openButton = document.querySelector('.open-btn');
const closeButton = document.getElementById('close-btn');
const saveButton = document.getElementById('save-btn');
const deleteButton = document.querySelector('.del');

for (let item of todoList) {
  const li = `<li> 
  <input type="checkbox" id="todo-${item.id}" ${item.completed ? "checked" : ""}>
  <label for="todo-${item.id}">${item.task}</label>
  <button type="button" class="del">Delete</button>
  </li>`; 
  ul.insertAdjacentHTML("beforeend", li); // position,text 
}

openButton.addEventListener('click', (evt) => {   // opens modal
  modal.style.display = "block";
});

closeButton.addEventListener('click', (evt) => { // closes modal
  modal.style.display = "none";
});

saveButton.addEventListener('click', (evt) => {  // adds a new todo
  evt.preventDefault(); // prevents the reaload of the page

  const input = modal.querySelector('input');
  if (input.value === "") return; // Ignore empty input

  const newTodo = {
    id: (todoList.length) + 1,
    task: input.value,
    completed: false,
  }

  todoList.push(newTodo);

  const newLi = `<li>
  <input type="checkbox" id="todo-${newTodo.id}" ${newTodo.completed ? "checked" : ""}>
  <label for="todo-${newTodo.id}">${newTodo.task}</label>
  <button type="button" class="del">Delete</button>
  </li>`;
  ul.insertAdjacentHTML("beforeend", newLi);

  input.value = ""; // empties the input field
  modal.style.display = "none"; // closes the modal
  console.log(todoList);
});

ul.addEventListener('click', (evt) => {  // listens for the delete button
  if (evt.target.classList.contains('del')) {
    const li = evt.target.parentElement; // Get the <li> parent of the clicked delete button
    const id = parseInt(li.querySelector('input').id.split('-')[1]); // Extract the id from the input's id

    const index = todoList.findIndex(item => item.id === id);
    if (index !== -1) {
      todoList.splice(index, 1); // Remove the item from the array
    };

    ul.removeChild(li);
    console.log(todoList);
  }
});

ul.addEventListener('change', (evt) => {  // listens for the checkbox changes
  if (evt.target.type === 'checkbox') {
    const li = evt.target.parentElement; // Get the <li> parent
    const id = parseInt(evt.target.id.split('-')[1]); // Extract the id from the checkbox's id

    // Find the corresponding item in the todoList array and update its completed property
    const todo = todoList.find(item => item.id === id);
    if (todo) {
      todo.completed = evt.target.checked; // Update the completed property
    }

    console.log(todoList); // Log the updated todoList array
  }
});