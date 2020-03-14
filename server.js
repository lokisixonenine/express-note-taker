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

    // try
    // catch

// set up section that writes new notes to JSON object

    // try
    // catch

// Set up note deletion function

    // try
    // catch

// HTML requests (GET) go here



