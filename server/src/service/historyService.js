"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryService = void 0;
// TODO: Define a City class with name and id properties
class City {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
// Example usage
// TODO: Complete the HistoryService class
providedIn: 'root';
class HistoryService {
    constructor() {
        this.history = [];
    }
    add(entry) {
        this.history.push(entry);
    }
    getHistory() {
        return this.history;
    }
    clearHistory() {
        this.history = [];
    }
}
exports.HistoryService = HistoryService;
// Add a city to the history
// TODO: Define a read method that reads from the searchHistory.json file
const fs_1 = __importDefault(require("fs"));
{
    try {
        const data = await fs_1.default.promises.readFile('searchHistory.json', 'utf-8');
    }
    catch (err) {
        console.error('Error reading search history:', err);
    }
}
// Function to read the search history from the file
const readSearchHistory = () => {
    // Read the existing search history
    console.error('Error reading the search history file:');
    return;
};
// Parse the existing data
console.log('Search History:');
//const searchHistory.json = (): Promise<any[]> => {
///return new Promise((resolve, reject) => {
// Parse the JSON data
// private async read() {}
// TODO: Define a write method that writes the updated cities array to the searchHistory.json file
function writeCitiesToFile(cities) {
    return new Promise((resolve, reject) => {
        // Convert the cities array to a JSON string
        const data = JSON.stringify(cities, null, 2); // Pretty print with 2 spaces
    });
    // private async write(cities: City[]) {}
    // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
    // Parse the JSON data
    // Map the cities array to City objects
    // async getCities() {}
    // TODO Define an addCity method that adds a city to the searchHistory.json file
    const newCity = newCity(cityName);
}
