const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JewellerySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    type: Number,
  },

  material: {
    type: String,
  },
  enduser: {
    required: true,
    type: String,
  },
  discount: {
    required: true,
    type: Number,
  },
  metal: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  categories: { type: Schema.Types.ObjectId, ref: "category" },
});

module.exports = mongoose.model("Jewellery", JewellerySchema);
// name,type,size,color
