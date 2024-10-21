


// Import the routes




// TODO: Serve static files of entire client dist folder
app.use(express.static(('dist')));



// Serve static files from the 'dist' folder
// TODO: Serve static files of entire client dist folder
// Serve static files from the 'dist' folder
app.use(express.static('../client/dist'));







// Define the path to the client dist folder


// Serve static files from the dist folder


// Serve the index.html file for any other routes (optional)

  


// Start the server



// Serve static files from the 'dist' directory


// Handle all other requests by sending the index.html file


// TODO: Implement middleware for parsing JSON and urlencoded form data
app.use(express.json());



// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing urlencoded form data
app.use(express.urlencoded({ extended: true }));

// Example route


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use(({ extended: true }))
// TODO: Implement middleware to connect the routes
// Middleware function


app.use(authMiddleware); // Apply middleware to all routes

app.get('/', (req: Request, res: Response) => {
  ('Hello from protected route!');
});

    
  

     




// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
