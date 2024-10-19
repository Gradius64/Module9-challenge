"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://api.openweathermap.org/data/2.5";
// TODO: Define a class for the Weather object
class baseURL {
    //  class WeatherAPIConfig {. < --- comment out
    //    private make!: string;
    // TODO: Define the baseURL, API key, and city name properties
    constructor(baseURL, apiKey, cityName) { }
}
// TODO: Create fetchLocationData method
class WeatherAPIConfig {
    fetchLocationData() { }
    // private async fetchLocationData(query: string) {}
    // TODO: Create destructureLocationData method
    destructureLocationData() {
    }
    // private destructureLocationData(locationData: Coordinates): Coordinates {}
    // TODO: Create buildGeocodeQuery method
    buildGeocodeQuery() {
        const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }
    // private buildGeocodeQuery(): string {}
    // TODO: Create buildWeatherQuery method
    buildWeatherQuery() {
        const apiKey = 'b51a017ab876f9c06bd9d31bcf79d900'; // Replace with your actual API key
        const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this}&appid=${apiKey}`)
            .then(response => {
            console.log(response);
        });
    }
    // private buildWeatherQuery(coordinates: Coordinates): string {}
    // TODO: Create fetchAndDestructureLocationData method
    fetchAndDestructureLocationData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const geocodeQuery = this.buildGeocodeQuery();
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const locationData = yield response.json();
                // Destructure the relevant data
                const { coord: { lat, lon }, name, weather } = locationData;
                return { lat, lon, name, weather }; // Return the destructured data
            }
            catch (error) {
                console.error('Error fetching location data:', error);
                throw error; // Rethrow the error for further handling if needed
            }
        });
    }
    // private async fetchAndDestructureLocationData() {}
    // TODO: Create fetchWeatherData method
    fetchWeatherData() {
        // Implement the parseCurrentWeather function
        let parseCurrentWeather;
        //parseCurrentWeather = 'my function';
        parseCurrentWeather = () => {
            console.log('this is my function');
            // private parseCurrentWeather(response: any) {}
            // TODO: Complete buildForecastArray method
            for (let i = 0; i < days; i++) {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i); 
                

            // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
            // TODO: Complete getWeatherForCity method
            try {
                const response = axios.get(BASE_URL, {
                    params: {
                        q: city,
                        appid: API_KEY,
                        units: 'metric' // or 'imperial' if you prefer Fahrenheit
                    }
                });
                return response.data; // Return the weather data
            } catch (error) {
                console.error('Error fetching weather data:', error);
                throw new Error('Could not retrieve weather data');
            }
        }
            // async getWeatherForCity(city: string) {}
        };
    }
    }

