const mongoose = require("mongoose");

//add task fields title,note,reminder and createdAt
const notesSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  note: {
    required: true,
    type: String,
  },
  reminder: {
    type: Date,
  },
});

module.exports = mongoose.model("notes", notesSchema);
