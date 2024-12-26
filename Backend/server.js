require('dotenv').config(); // Load environment variables from a .env file
const express = require('express'); // Import Express
const app = express(); // Create an instance of Express

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define the port using an environment variable or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server Running at Port ${port}`);
});
