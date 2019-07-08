import TodoService from "./todo-service.js";

let _todoService = new TodoService()


function _drawTodos() {
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
		e.preventDefault() //NOTE we do this so the page doesn't refresh on a submit event
		let form = e.target // NOTE all of lines 32-35 are drilling into the event and only keeping the info that we care about
		let newTodo = {
			description: form.description.value //NOTE the value of the input field is what the user typed in
		}
		_todoService.addTodo(newTodo) //NOTE we pass the info we care about to the service
		form.reset()

	}

	toggleTodoStatus(todoId) {

		//TODO complete this logic (both in here and in the service at toggleTodoStatus)
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
