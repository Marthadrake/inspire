export default class Todo {
  constructor(data) {
    this._id = data._id || ''
    this.name = data.name || ''
    this.list = data.list || ''
    this.description = data.description || '';
  }

  get template() {
    return `
    <div class="col-4">
      <h4>Name: ${this._id}< button class="btn btn-primary" onclick = "app.contorllers.todoController.removeTodo('${this._id})" > Delete</button >:< button class= "btn btn-info" onclick = "app.contollers.todoContoller.addTodo()"Add</button ></h4>
      <h4>List: ${this.list}</h4>
      <h4>Description: ${this.description}</h4>
    </div>
    `
  }
}
