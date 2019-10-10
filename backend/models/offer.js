const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OfferSchema = new Schema({
  text: { type: String, required: true },
  title: { type: String, required: true },
  titleColor: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  ratedCount: { type: Number, required: true },
  img: { type: String, required: true },
});
const OfferModel = mongoose.model("offer", OfferSchema);
module.exports = OfferModel;
