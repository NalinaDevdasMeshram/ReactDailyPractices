import mongoose from "mongoose";
import product from "./product.js";

const OrderSchema = new mongoose.Schema(
  {
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: product,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalprice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);

const orderDetails = mongoose.model("Order", OrderSchema);
export default orderDetails;
