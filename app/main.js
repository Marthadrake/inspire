import ImageController from "./components/image/image-controller.js";
import QuoteContoller from "./components/quote/quote-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import WeatherController from "./components/weather/weather-controller.js"

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??

class App {
  constructor() {
    this.controllers = {
      ImageController: new ImageController(),
      QuoteContoller: new QuoteContoller(),
      TodoController: new TodoController(),
      WeatherController: new WeatherController()
    }
  }
}

window['app'] = new App()  