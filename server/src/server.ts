// In your main app file (e.g., app.ts)



// Import the routes
import routes from './routes/index.js';



const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
/ Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve index.html for any route not explicitly handled
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




interface City {
    name: string;
    country: string;
    population: number;
    // Add more properties as needed
  }



// TODO: Implement middleware for parsing JSON and urlencoded form data

import path from 'path';





// TODO: Implement middleware to connect the routes



