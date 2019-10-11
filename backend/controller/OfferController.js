const OfferModel = require("../models/offer");

class OfferController {
  static async getAll(req, res) {
    const offers = await OfferModel.find({});
    res.send(offers);
  }

  static async removeOfferById(req, res) {
    await OfferModel.findByIdAndDelete(req.params.id);
    res.json({status: 'OK'});
  }
}

module.exports = OfferController;
