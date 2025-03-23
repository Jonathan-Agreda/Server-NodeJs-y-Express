const mongoose = require("mongoose");
//require("dotenv").config();

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://jagreda:${password}@cluster0.pyiz2.mongodb.net/noteApp?retryWrites=true&w=majority`;
//const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

/* const note = new Note({
  content: "HTML is easy",
  important: true,
});

note.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
});

const note2 = new Note({
  content: "Browser can execute only JavaScript",
  important: false,
});

note2.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
});

const note3 = new Note({
  content: "GET and POST are the most important methods of HTTP protocol",
  important: true,
});

note3.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
}); */

/* Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
}); */

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
