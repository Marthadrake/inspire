import QuoteService from "./quote-service.js";

let _quoteService = new QuoteService()


function _drawQuotes() {
  // What is my purpose?
  let quotesElem = document.querySelector("#quotes");
  let quotes = _quoteService.Quote;
  let template = '';
  quotes.forEach(quote => template += quote.template)
  quotesElem.innerHTML = template
}

// function _drawError() {
// 	console.error('[TODO ERROR]', _todoService.TodoError)
// 	document.querySelector('#todo-error').textContent = `${_todoService.TodoError}`
// }


export default class QuoteController {
  constructor() {

    // _quoteService.addSubscriber('error', _drawError)
    _quoteService.addSubscriber('quotes', _drawQuotes)
    _quoteService.getQuote();
    // Don't forget to add your subscriber
  }

  addQuote(e) {
    e.preventDefault() //NOTE we do this so the page doesn't refresh on a submit event
    let form = e.target // NOTE all of lines 32-35 are drilling into the event and only keeping the info that we care about
    let newQuote = {
      description: form.description.value //NOTE the value of the input field is what the user typed in
    }
    _quoteService.addQuote(newQuote) //NOTE we pass the info we care about to the service
    form.reset()

  }

  toggleQuoteStatus(quoteId) {

    //TODO complete this logic (both in here and in the service at toggleTodoStatus)
    // asks the service to edit the todo status
    _quoteService.toggleQuoteStatus(quoteId)
  }

  removeQuote(quoteId) {
    // ask the service to run the remove todo with this id
    _quoteService.removeQuote(quoteId)
  }



}

