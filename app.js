const express = require('express');
const app = express();

//middleware
app.use(express.json());

//Routes
app.use('/animals', animals)

app.get('/', (req, res) => {
    res.send('Hello Animals!');
});


module.exports = app;