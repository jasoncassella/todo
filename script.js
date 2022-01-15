const addButton = document.querySelector('#add');

class Todo {
  constructor(title, details, date, completed, trash) {
    this.title = title;
    this.details = details;
    this.date = date;
    this.completed = completed;
    this.trash = trash;
  }
}

addButton.addEventListener('click', addTodo);

function addTodo() {
  console.log('create new todo');
}
