const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Jewellery = require("./jwellery.model");
const CategorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

//const category = mongoose.model("category", CategorySchema);

Jewellery.findOne({ name: "ring" })
  .populate("category")
  .exec(function (err, story) {
    if (err) return error;
    console.log("The name of jewellery is %s", story);
  });

module.exports = mongoose.model("category", CategorySchema);
