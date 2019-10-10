const OfferModel = require("../models/offer");

const offersData = [
  {
    text: "photography",
    title: "Get pictures in front of chic landmark",
    titleColor: "#6A5A56",
    price: 102,
    rating: 5,
    ratedCount: 205,
    img: "stub"
  },
  {
    text: "history",
    title: "Louvre-Art History lecture tour and afternoon tea",
    titleColor: "#6A5A56",
    price: 72,
    rating: 5,
    ratedCount: 14,
    img: "stub"
  },
  {
    text: "photography",
    title: "Get pictures in front of chic landmark",
    titleColor: "#6A5A56",
    price: 102,
    rating: 5,
    ratedCount: 205,
    img: "stub"
  },
  {
    text: "photography",
    title: "Get pictures in front of chic landmark",
    titleColor: "#6A5A56",
    price: 102,
    rating: 5,
    ratedCount: 205,
    img: "stub"
  },
  {
    text: "photography",
    title: "Get pictures in front of chic landmark",
    titleColor: "#6A5A56",
    price: 102,
    rating: 5,
    ratedCount: 205,
    img: "stub"
  }
];

module.exports.seedOffers = async function() {
  await OfferModel.deleteMany({});
  return await OfferModel.insertMany(offersData);
};
