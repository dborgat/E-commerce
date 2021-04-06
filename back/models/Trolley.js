const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trolleySchema = new mongoose.Schema({
  totalProducts: { type: Number },
  totalMoney: { type: Number },
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  product: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "product" },
      name: { type: String },
      quantity: { type: Number },
      price: { type: Number },
      img: { type: String },
    },
  ],
});

module.exports = mongoose.model("trolley", trolleySchema);
