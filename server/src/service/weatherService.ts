// TODO: Define an interface for the Coordinates object
interface Coordinates {
    latitude: number;  // The latitude of the location
    longitude: number; // The longitude of the location
  }
  
  const url="https://api.openweathermap.org/data/2.5"; 
  
  // TODO: Define a class for the Weather object
  
  
  class baseURL { 
  
    private make!: string;
  
    //  class WeatherAPIConfig {. < --- comment out
   //    private make!: string;
      
  
  
   
  
      
  
  
  
  
  
    
  
  
  
    
    // TODO: Define the baseURL, API key, and city name properties
    constructor(baseURL: string, apiKey: string, cityName: string) {}
  
  
    
      
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
      .then(response=>{
        console.log(response)}
      )
  }  
  
  
    // private buildWeatherQuery(coordinates: Coordinates): string {}
    // TODO: Create fetchAndDestructureLocationData method
    async fetchAndDestructureLocationData() { 
      try { 
          const geocodeQuery = this.buildGeocodeQuery();
          const response = await fetch(url);
          
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const locationData = await response.json();
          
          // Destructure the relevant data
          const { coord: { lat, lon }, name, weather } = locationData;
  
          return { lat, lon, name, weather }; // Return the destructured data
      } catch (error) {
          console.error('Error fetching location data:', error);
          throw error; // Rethrow the error for further handling if needed
      }
  }
  
    // private async fetchAndDestructureLocationData() {}
    // TODO: Create fetchWeatherData method
    fetchWeatherData(): void {
        
    
        
    // private async fetchWeatherData(coordinates: Coordinates) {}
    // TODO: Build parseCurrentWeather method
    interface ParsedCurrentWeather {
      cityName: string;
      date: string;
      icon: string;
      description: string;
      temperature: number;
      humidity: number;
      windSpeed: number;
  }
  
  // Implement the parseCurrentWeather function
 let parseCurrentWeather: Function;

 //parseCurrentWeather = 'my function';

 parseCurrentWeather = () => {
  console.log('this is my function');
    // private parseCurrentWeather(response: any) {}
    // TODO: Complete buildForecastArray method
    function buildForecastArray(periods: number): WeatherForecast[] {

      const forecasts: WeatherForecast[] = [];
    
    
    
      for (let i = 0; i < periods; i++) {
    
        const date = new Date();
    
        date.setDate(date.getDate() + i);
    
    
    
        const temperatureCelsius = Math.floor(Math.random() * 10) + 10;
    
        const summary = getSummary();
    
    
    
        forecasts.push({
    
          date: date.toLocaleDateString(),
    
          temperatureC: temperatureCelsius,
    
          temperatureF: 32 + Math.round(temperatureCelsius * 9 / 5),
    
          summary: summary
    
        });
    
      }
    
    
    
      return forecasts;
    
    }
    
    
    
    function getSummary(): string {
    
      const summaries = [
    
        "Cloudy",
    
        "Rainy",
    
        "Sunny",
    
        "Partly Cloudy",
    
        "Windy"
    
      ];
    
    
    
      return summaries[Math.floor(Math.random() * summaries.length)];
    
    }
    
    
    
    interface WeatherForecast {
    
      date: string;
    
      temperatureC: number;
    
      temperatureF: number;
    
      summary: string;
    
    }
   
    
    
    // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
    // TODO: Complete getWeatherForCity method
    interface WeatherData {
      // Define the structure of the weather data you expect
      city: string;
      temperature: number;
      humidity: number;
      windSpeed: number;
      // Add other fields as necessary based on the API response
  }
  
  async function getWeatherForCity(city: string): Promise<WeatherData | null> {
      const apiKey: string = 'YOUR_API_KEY'; // Replace with your actual API key
      const baseUrl: string = 'https://api.openweathermap.org/data/2.5/forecast';
  
      try {
          // Make a request to the OpenWeather API
          const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
  
          // Check if the response is ok (status code 200)
          if (!response.ok) {
              throw new Error('City not found');
          }
  
          // Parse the JSON response
          const weatherData = await response.json();
  
          // Extract relevant data from the response and return it
          const currentWeather: WeatherData = {
              city: weatherData.city.name,
              temperature: weatherData.list[0].main.temp,
              humidity: weatherData.list[0].main.humidity,
              windSpeed: weatherData.list[0].wind.speed,
              // Map other fields as necessary
          };
  
          return currentWeather;
      } catch (error) {
          console.error('Error fetching weather data:', error);
          return null; // Return null in case of an error
      }
  }
    
    // async getWeatherForCity(city: string) {}
  
  
    }
  }
}
