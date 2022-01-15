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

let brushTeeth = new Todo('brush teeth', { location: 'home', priority: 'Low', due: 'dec 11 2021', comments: 'with colgate' });

function addTodo() {
  console.log('create new todo');
}
