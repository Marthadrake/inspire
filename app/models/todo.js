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

  }
}