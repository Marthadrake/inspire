import TodoService from "./todo-service.js";

let _todoService = new TodoService()


function _drawTodos() {
	debugger
	// What is my purpose?
	let todosElem = document.querySelector("#todos");
	let todos = _todoService.Todo;
	let template = '';
	todos.forEach(todo => template += todo.template)
	todosElem.innerHTML = template
}

// function _drawError() {
// 	console.error('[TODO ERROR]', _todoService.TodoError)
// 	document.querySelector('#todo-error').textContent = `${_todoService.TodoError}`
// }


export default class TodoController {
	constructor() {

		// _todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodo();
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let newTodo = {
			description: form.description.value
		}
		_todoService.addTodo(newTodo)
		form.reset()

	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
