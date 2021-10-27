const path = require('path');
const route = require("express").Router()
const fs = require('fs');

// GET Route for retrieving all of the notes
route.get('/', (req, res) => {
    
    let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))

    allNotes = JSON.parse(allNotes);

    res.json(allNotes);
});

// POST Route for retrieving all of the notes then adding an aidditional at the end
route.post('/', (req, res) => {
    
    const newNote = req.body;

    let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))

    allNotes = JSON.parse(allNotes);
    allNotes.push(newNote);


    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(allNotes));
    allNotes = JSON.parse(allNotes);

    res.json(allNotes);
});

route.delete('/', (req, res) => {
    
    const deleteNote = req.body;
    
    //const newNote = req.body;

    let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))

    //allNotes = JSON.parse(allNotes);
    //allNotes.push(newNote);


    //fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(allNotes));
    //allNotes = JSON.parse(allNotes);
    
    //res.json(allNotes);
});

module.exports = route;