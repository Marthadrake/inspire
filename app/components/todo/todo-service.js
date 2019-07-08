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
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		todoApi.get('')
			.then(res => {
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
			.catch(err => _setState('error', err.response.data))

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
				console.log("added todos", res.data)
			})
			.catch(err => _setState('error', err.response.data))
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