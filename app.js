const express = require('express'); // Importing the express module
const app = express(); // Creating an express application
const animals = require("./routes/animals-routes"); // Importing routes

// Middleware to parse JSON data in the request body
app.use(express.json());

// Routes
app.use('/animals', animals); // All routes in `animals-routes` will now be prefixed with '/animals'

// Basic route for the homepage
app.get('/', (req, res) => {
    res.send('Hello Animals!');
});

// Export the app so it can be used in other files (like index.js)
module.exports = app;
