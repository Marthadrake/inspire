import TodoService from "./todo-service.js";

let _todoService = new TodoService()


function _drawTodos() {
	// What is my purpose?
	let todosElem = document.querySelector("#todo")
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(todo => {
		template += todo.Template
	})
	todosElem.innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError}`
}

// function _drawToggleTodoStatus() {
// 	console.log("bring-up daily todo", _drawToggleTodoStatus)
// }

// function _drawRemoveTodo() {
// 	console.log("finished todo list", _drawRemoveTodo)
// }


export default class TodoController {
	constructor() {

		_todoService.addSubscriber('error', _drawError)
		// _todoService.addSubscriber("todos", _drawTodos),
		// _todoService.addSubscriber("toggleTodoStatus", _drawToggleTodoStatus),
		// _todoService.addSubscriber("removeTodo", _drawRemoveTodo),
		_todoService.getTodos(),
			// _todoService.toggleTodoStatus(),
			// _todoService.removeTodo()

			// Don't forget to add your subscriber
			console.log("todo list")
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			// dont forget to build your todo Object
		}

		_todoService.addTodo(todo)

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
