import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
  number: {
    required: true,
    type: Number,
    default: null
  },
  slots: {
    heigth: {
      required: true,
      type: Number,
      default: 1
    },
    width: {
      required: true,
      type: Number,
      default: 1
    },
    content: [[{
      product: String,
      amount: Number,
    }]]
  },
  payment: {
    required: true,
    type: String,
  },
  coin_eating_chance: { type: Number },
  stuck_product_chance: { type: Number }
},{
    versionKey: false,
  });

export = mongoose.model('Data', modelSchema)
