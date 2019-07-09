export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get template() {

    //TODO add a button to toggle the status of the todo (IE., if it's complete or not) dont forget to pass the id
    return `
    <div>
    <h5>Todo:</h5><h3>${this.description}</h3><button class="btn-success" onclick="app.controllers.TodoController.removeTodo('${this._id}')">Deleted</button>  <button><input type="checkbox" class="btn-warning">COMPLETED</button>
    </div>
    `
  }
  // <button class="btn btn-primary" onclick="app.controllers.TodoController.removeTodo('${this._id}')">Deleted</button >Todo: ${this.description}<input type="checkbox" class="strikethrough">complete
  // <h4>Completed: ${this.completed}</h4>
  // <h4>User: ${this.user}</h4>
}
