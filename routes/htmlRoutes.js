const path = require('path');
const route = require("express").Router()

// GET Route for retrieving the HTML homepage
route.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for retrieving the notes HTML page
route.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = route;