const {mongoose} = require("../config/db");

const cartSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  items: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
      },
      amount: Number
    }
  ]
});

const CartModel = mongoose.modeol("cart", cartSchema);

module.exports = CartModel;