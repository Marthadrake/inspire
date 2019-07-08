export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get template() {
    return `
    <div class="col-4">
      <button class="btn btn-primary" onclick="app.controllers.TodoController.removeTodo('${this._id}')" > Delete</button >
      <h4>Completed: ${this.completed}</h4>
      <h4>User: ${this.user}</h4>
      <h4>Description: ${this.description}</h4>
    </div>
    `
  }
}
