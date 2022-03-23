const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  product: {
    contentType: String,
  },

  qty: {
    contentType: Number,
  },
});

module.exports = mongoose.model("cart", CartSchema);
