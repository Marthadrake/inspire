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
    <h5>Todo: ${this.description}</h5>
    <button class="btn btn-primary btn-sm" onclick="app.controllers.TodoController.removeTodo('${this._id}')" >Deleted</button >
  <input type="checkbox-sm"/><label class="strikethrough">completed</label></button>
    </div>
      `
  }
  // <h4>Completed: ${this.completed}</h4>
  // <h4>User: ${this.user}</h4>
}
