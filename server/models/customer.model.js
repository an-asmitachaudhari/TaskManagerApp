const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  contact: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Cust", CustomerSchema);
