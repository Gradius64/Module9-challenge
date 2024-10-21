import { isConstructorDeclaration } from "typescript";

// TODO: Define an interface for the Coordinates object
interface Coordinates {
    latitude: number;  // The latitude of the location
    longitude: number; // The longitude of the location
  }
  
  //const url="https://api.openweathermap.org/data/2.5"; 
  
  // TODO: Define a class for the Weather object
  class WeatherData {
    city: string; // Name of the city
    temperature: number; // Current temperature
    condition: string; // Weather condition (e.g., sunny, rainy)
    forecast: string[]; // Five-day weather forecast
    constructor(
      city: string,
      temperature: number,
      forecast: string[],
      condition: string
   ) {
  
     this.city = city
     this.condition = condition

      this.forecast = forecast
      this.temperature = temperature

   }
  }
  // TODO: Define an interface for the Coordinates object
  interface Coordinates {
    latitude: number;
    longitude: number;
}

// TODO: Define a class for the Weather object
class Weather {
  private temperature: number;
  private humidity: number;
  private description: string;
  private windSpeed: number;

  constructor(temperature: number, humidity: number, description: string, windSpeed: number) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.description = description;
      this.windSpeed = windSpeed;
  }

  public getTemperature(): number {
      return this.temperature;
  }

  public getHumidity(): number {
      return this.humidity;
  }

  public getDescription(): string {
      return this.description;
  }

  public getWindSpeed(): number {
      return this.windSpeed;
  }

  public getWeatherSummary(): string {
      return `The temperature is ${this.temperature}°C with ${this.humidity}% humidity. Conditions: ${this.description}. Wind speed: ${this.windSpeed} km/h.`;
  }
}

  


      

      
  
     