import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/martha/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}

let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	getTodosError() {
		throw new Error("Method not implemented.");
	}
	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				console.log(res.data.message)
				this.getTodo()
			})
			.catch(err => _setState('error', err.response.data))
		// The http method is delete at the todoId
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				console.log(res.data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	getTodo() {
		todoApi.get()
			.then(res => {
				console.log(res.data.data)
				_setState('todo', res.data.results)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Todo() {
		return _state.todos.map(error => new Todo(error))
	}
	get TodoError() {
		return _state.error
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL

		todoApi.put(todoId, todo)
			.then(res => {
				console.log("todo", res.data)
				_setState("todo", res.data)
			})
			.catch(err => _setState('error', err.response.data))
	}
}