import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        default: ""
    },
    price: {
        required: true,
        type: Number,
        default: 0
    },
    code:{
        required: true,
        type: String,
        default: null
    },
    quantity:{
      required: true,
      type: Number,
      default: 0
    }
},{
    versionKey: false,
});

export = mongoose.model('Data', modelSchema)
