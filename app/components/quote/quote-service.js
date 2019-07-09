import Quote from "../../models/quote.js"

// @ts-ignore
const quoteApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: [],
	error: {},
}

let _subscribers = {
	quotes: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}
// TODO set up the observer pattern architecture
// namely: state, subscribers, setState(), and QuoteService.addSubscriber


export default class QuoteService {
	getQuotesError() {
		throw new Error("Method not implemented.");
	}
	removeQuote(quoteId) {
		quoteApi.delete(quoteId)
			.then(res => {
				console.log(res.data.message)
				this.getQuote()
			})
			.catch(err => _setState('error', err))
		// The http method is delete at the todoId
	}

	addQuote(quote) {
		quoteApi.post('', quote)
			.then(res => {
				console.log(res.data)
				this.getQuote()
			})
			.catch(err => _setState('error', err))
	}
	getQuote() {
		quoteApi.get()
			.then(res => {
				console.log(res.data.data)
				_setState('quotes', res.data.data)
			})
			.catch(err => _setState('error', err))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Quote() {
		return _state.quotes.map(q => new Quote(q))
	}
	get QuoteError() {
		return _state.error
	}

	toggleQuoteStatus(quoteId) {
		let quote = _state.quote.find(quote => quote._id == quoteId)
		quote.completed = !quote.completed

		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL

		quoteApi.put(quoteId, quote)
			.then(res => {
				console.log("quote", res.data)
				_setState("quote", res.data)
			})
			.catch(err => _setState('error', err))
	}
}