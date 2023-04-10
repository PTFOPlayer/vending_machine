import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    number: {
        required: true,
        type: Number,
        default: null
    },
    slots:{
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
        content:[[{
          product: String,
          amount: Number
          }
        ]]
    },
    coordinates:{
      x:{
        required: true,
        type: Number
      },
      y:{
        required: true,
        type: Number
      }
    },
    coin_eating_chance:{
      required: false,
      type: Number 
    },
    stuck_product_chance:{
      required: false,
      type: Number
    },
    payment:{
      required: true,
      type: String,
    }
},
{
    versionKey: false,
});

export = mongoose.model('Data', modelSchema)
