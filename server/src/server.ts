//import express, { Request, Response } from 'express'; 

//const app = express();

////app('/', (req: Request, res: Response) => {
  //res('Hello World!');
//});



import path from 'path';

// In your main app file (e.g., app.ts)


// Import the routes




const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
// Serve the index.html file for any other routes

(path.join(__dirname, 'client', 'dist'));


  (path.join(__dirname, 'client', 'dist', 'index.html'));

//Serve static files from the 'dist' folder

// Catch-all route to serve index.html for any route not explicitly handled






interface City {
    name: string;
    country: string;
    population: number;
    // Add more properties as needed
  }



// TODO: Implement middleware for parsing JSON and urlencoded form data






// TODO: Implement middleware to connect the routes



