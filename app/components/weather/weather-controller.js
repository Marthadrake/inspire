import WeatherService from "./weather-service.js";

let _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
