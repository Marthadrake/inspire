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
    <h4>_id: ${this._id}<h/4>
    <h4>Todo: ${this.description}</h4>
    <h4>Completed: ${this.completed}</h4>
    <h4>User: ${this.user}</h4>
    </div>
      `
  }
}