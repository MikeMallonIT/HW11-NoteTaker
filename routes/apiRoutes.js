const path = require('path');
const route = require("express").Router();
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");

// Use the FS Utils file from class @SMU/ Trilogy Education
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require("../helpers/fsUtils");

// GET Route for retrieving all of the notes
route.get('/', (req, res) => {
    
    let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'))

    allNotes = JSON.parse(allNotes);

    res.json(allNotes);
});

// POST Route for retrieving all of the notes then adding an aidditional at the end
route.post('/', (req, res) => {
    
    if(req.body){
    const {title, text} = req.body;
    const newNote = {
        title,
        text,
        id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');

    res.json(`Note added`);
    }
    else{
        res.error("Failure adding note");
    }
});

// DELETE for removing a note based on an ID
route.delete("/:id", (req, res) => {
    const noteId = req.params.id;
    readFromFile("./db/db.json")
      .then((data) => JSON.parse(data))
      .then((json) => {

        const result = json.filter((note) => note.id !== noteId);
  
        writeToFile("./db/db.json", result);
  
        res.json(`Note deleted`);
      });
  });

module.exports = route;