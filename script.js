let todos = [];

const addButton = document.querySelector('#add');

class Todo {
  constructor(title, date, completed) {
    this.title = title;
    this.date = date;
    this.completed = completed;
  }
}

addButton.addEventListener('click', addTodoPrompt);

function addTodoPrompt() {
  console.log('create new todo prompt');
}

function updateContent() {
  const todoList = document.querySelector('.todo-list');
  todos.forEach(todo => {
    console.log(todo);
  });
}

updateContent();
