const { time } = require("console");
const mongoose = require("mongoose");

//add notes fields taskname,date,reminder,urgent flag status and updatedAt
const taskSchema = new mongoose.Schema({
  taskName: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
  reminder: {
    type: Date,
  },
  urgent: {
    type: Boolean,
  },
  note: {
    required: true,
    type: String,
  },
  status: {
    type: String,
  },
  finishedDate: {
    type: Date,
  },
});

module.exports = mongoose.model("task", taskSchema);
