let todoList = [];

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
  todoList.forEach(todo => {
    console.log(todoList);
  });
}

updateContent();
