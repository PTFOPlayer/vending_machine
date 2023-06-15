import mongoose from "mongoose";

//schemat obiektu z bazy danych
const modelSchema = new mongoose.Schema({
  //numer maszyny
  number: {
    required: true,
    type: Number,
    default: null
  },
  //ilosc slotow
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
    //zawartosc w slocie
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
    //usuniecie pola wersji z dokumentu mongo
    versionKey: false,
  });

export = mongoose.model('Data', modelSchema)
