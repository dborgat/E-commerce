const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  products: [],
  date: {
    type: String,
  },
});

module.exports = mongoose.model("purchase", purchaseSchema);

/* products:[{
    product:{
      type:Schema.types.objectid.. ref:'product'
    },
    quantity:{
      type:number
      min:1
    }
  }]*/

