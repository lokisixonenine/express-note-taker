const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
//const bodyParser = require("body-parser");

// need to set port for listening
const PORT = process.env.PORT || 4300;

// need to initialize array that will hold data from notes
let notesArray = [];

// need to set up parsing, routing middleware, and static path for files
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "Develop/public")));

// set up response that sends results to browser in an array of objects
app.get("/api/notes", function(err,res) {
// try
    try{
        notesArray=fs.readFileSync("Develop/db/db.json", "utf8");
        console.log("All your notes are belong to us!");
        notesArray = JSON.parse(notesArray);
// catch
    } catch(err) {
        console.log("\n error (in appt.get.catch):");
        console.log(err);
    }
        res.json(notesArray);
});
    
// set up section that writes new notes to JSON object
app.post("/api/notes", function(err,res){
// try
    try {
        notesArray = fs.readFileSync("./Develop/db/db.json", "utf8");
        console.log(notesArray);
        notesArray = JSON.parse(notesArray);
        req.body.id = notesArray.length;
        notesArray.push(req.body);
        notesArray = JSON.stringify(notesArray);
        fs.writeFile("./Develop/db/db.json", notesArray, "utf8", function(err){
            if (err) 
            throw err;
        });
        res.json(JSON.parse(notesArray));
// catch
    } catch (err){
        throw err;
        console.error(err);
    }
});

// Set up note deletion function
app.delete("/api/notes/:id", function(req,res) {
// try
    try {
        notesArray = fs.readFileSync("./Develop/db/db.json", "utf8");
        notesArray = JSON.parse(notesArray);
        notesArray = notesArray.filter(function(note) {
        return note.id != req.params.id;
        });
        notesArray = JSON.stringify(notesArray);
        fs.writeFile("./Develop/db/db.json", notesArray, "utf8", function(err){
            if (err) throw err;
        });
// catch
    } catch (err) {
        throw err;
        console.log(err);
    }
});


// HTML requests (GET) go here



