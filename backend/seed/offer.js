const OfferModel = require("../models/offer");

const offersData = [
  {
    title: "photography",
    name: "Get pictures in front of chic landmark",
    titleColor: "#6A5A56",
    price: 102,
    rating: 5,
    ratedCount: 205,
    img: "https://material.angular.io/assets/img/examples/shiba1.jpg"
  },
  {
    title: "history",
    name: "Louvre-Art History lecture tour and afternoon tea",
    titleColor: "#6C5F74",
    price: 72,
    rating: 3,
    ratedCount: 14,
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  {
    title: "shopping",
    name: "Explore French brands and designers!",
    titleColor: "#B7855B",
    price: 90,
    rating: 5,
    ratedCount: 46,
    img: "https://material.angular.io/assets/img/examples/shiba1.jpg"
  },
  {
    title: "food & drink",
    name: "bike and taste the best of Paris at your own pace.",
    titleColor: "#B53D51",
    price: 83,
    rating: 5,
    ratedCount: 337,
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  {
    title: "arts & design",
    name: "Photograph and be photographed in colorful",
    titleColor: "#FD715A",
    price: 54,
    rating: 5,
    ratedCount: 20,
    img: "https://material.angular.io/assets/img/examples/shiba1.jpg"
  },
  {
    title: "car ride",
    name: "Visit paris in a vintage car",
    titleColor: "#9E7C4F",
    price: 119,
    rating: 5,
    ratedCount: 8,
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  }
];

module.exports.seedOffers = async function() {
  await OfferModel.deleteMany({});
  return await OfferModel.insertMany(offersData);
};
