const express = require("express");
const path = require("path");
const notes = require("./db/db.json")
const fs = require("fs");

const app = express();
const PORT = 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// app.use(express.static("files"));
// app.use(express.static("public"));
// app.use('/static', express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))

// adds note to db.json
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

// for adding notes
app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNote = req.body;
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});

// home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// notes.html
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});