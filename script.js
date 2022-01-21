const todos = [];

const addButton = document.querySelector('#add');

class Todo {
  constructor(title, date, isComplete) {
    this.title = title;
    this.date = date;
    this.isComplete = isComplete;
  }
}

addButton.addEventListener('click', addTodoPrompt);

function addTodoPrompt() {
  // create new todo
  addTodo('brush teeth', '1/21/22', false);
}

function addTodo(title, date, isComplete) {
  const todo = new Todo(title, date, isComplete);
  todos.push(todo);
  updateContent();
}

function updateContent() {
  console.log(todos);
  // const todoList = document.querySelector('.todo-list');
  // todos.forEach(todo => {
  //   console.log(todo);
  // });
}

updateContent();
