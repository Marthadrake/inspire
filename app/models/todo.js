export default class Todo {
  constructor(data) {
    this._id = data._id || ''
    this.wake = data.wake || ''
    this.shake = data.shake || ''
    this.make = data.make || ''
    this.bake = data.bake || ''
    this.description = data.description
    this.imageUrl = data.imageUrl
  }

  get Template() {
    return `
    <div class ="col-4">
      <div class ="card-body">
        <img src=${this.imageUrl} alt="todo List class="card-img-top"</>

			  <h4> description: ${this.description}</h4>
      </div>
      <div class="card-center">
	    <button onclick="app.controllers.todoConttoller.todoo('${this._id}')" class="btn btn-success">Todo List</button>
	    <button onclick="app.controllers.todoConttoller.todoo('${this._id}')" class="btn btn-primary">Clear Todo</button>
      </div>
      </div>
    </div>
`
  }
}