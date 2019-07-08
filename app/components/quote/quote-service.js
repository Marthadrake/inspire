// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

// TODO set up the observer pattern architecture
// namely: state, subscribers, setState(), and QuoteService.addSubscriber


export default class QuoteService {
	/** TODO define your getQuote method
	 * 1. make a http GET request to the axios instance
	 * 2. drill into the response object and only keep the info you care about
	 * 3. save that info to the state via the setState method 
	 * */
}
