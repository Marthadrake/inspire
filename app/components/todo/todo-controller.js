import TodoService from "./todo-service.js";

const _todoService = new TodoService()


function _drawTodos() {
	console.log("Things To Do In A Day", _todoService)
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}

function _drawToggleTodoStatus() {
	console.log("bring-up daily todo", _drawToggleTodoStatus)
}

function _drawRemoveTodo() {
	console.log("finished todo list", _drawRemoveTodo)
}


export default class TodoController {
	constructor() {
		// Don't forget to add your subscriber
		console.log("todo list")
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber("toggleTodoStatus", _drawToggleTodoStatus)
		_todoService.addSubscriber("removeTodo", _drawRemoveTodo)
		_todoService.getTodos(),
			_todoService.toggleTodoStatus()
		_todoService.removeTodo()

	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			wake: form.wake.value,
			shake: form.shake.value,
			make: form.make.value,
			bake: form.bake.value,
			description: form.description.value,
			imgUrl: form.imgUrl.value
		}

		_todoService.addTodo(todo)
		form.rest()
		_drawTodos
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
