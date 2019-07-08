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
			.catch(err => _setState('error', err))
		// The http method is delete at the todoId
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				console.log(res.data)
				this.getTodo()
			})
			.catch(err => _setState('error', err))
	}

	getTodo() {
		todoApi.get()
			.then(res => {
				console.log(res.data.data)
				_setState('todos', res.data.data)
			})
			.catch(err => _setState('error', err))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Todo() {
		return _state.todos.map(t => new Todo(t))
	}
	get TodoError() {
		return _state.error
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL

		todoApi.put(todoId, todo)
			.then(res => {
				console.log("todo", res.data)
				_setState("todo", res.data)
			})
			.catch(err => _setState('error', err))
	}
}