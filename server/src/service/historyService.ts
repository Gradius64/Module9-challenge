// TODO: Define a City class with name and id properties
class City {
  
  }


// Example usage




// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file

    private filePath: string; // Path to the searchHistory.json file

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    public read(): Promise<City[]> {
        return new Promise((resolve, reject) => {
            
               
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  function writeCitiesToFile(cities: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
        // Convert the cities array to a JSON string
        const data = JSON.stringify(cities, null, 2); // Pretty print with 2 spaces
    
}
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  
  
 
  // Parse the JSON data
  
  // Map the cities array to City objects
  
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // Function to add a city to the search history
const addCity = (city) => {
  // Read the existing search history
  fs.readFile(searchHistoryPath, 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading search history:', err);
          return;
      }

      // Parse the existing data
      let searchHistory = JSON.parse(data);

      // Create a unique ID for the new city (you can use a package like uuid for this)
      const newCity = {
          id: Date.now(), // Simple unique ID based on timestamp
          name: city
      };

      // Add the new city to the search history
      searchHistory.push(newCity);

      // Write the updated search history back to the file
      fs.writeFile(searchHistoryPath, JSON.stringify(searchHistory, null, 2), (err) => {
          if (err) {
              console.error('Error writing to search history:', err);
          } else {
              console.log(`City "${city}" added to search history.`);
          }
      });
  });
};
 
  // Create a new city object
  
  


  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
    

  // Define the add city method

  }
}
    }
  
