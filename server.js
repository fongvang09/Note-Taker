const express = require("express");
const path = require("path");
const notes = require("./db/db.json")
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// // adds note to db.json
// app.get("/api/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "/db/db.json"))
// });

// // for adding notes
// app.post("/api/notes", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("./db/db.json"));
//     const newNote = req.body;
//     notes.push(newNote);
//     fs.writeFileSync("./db/db.json", JSON.stringify(notes))
//     res.json(notes);
// });

// // deleting notes
// app.delete("/api/notes/:id", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("./db/db.json"));
//     const deleteNote = notes.filter((delNote) => delNote.id !== req.params.id);
//     fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
//     res.json(deleteNote);
// });

// // home page
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// // notes.html
// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// app.listen(PORT, function() {
//     console.log("App listening on http://localhost:" + PORT);
// });

// Start the server on the port
app.listen(PORT, () => console.log("App listening on http://localhost:" + PORT));
