const express = require("express");
const router = express.Router();
const { isAdminMiddleware } = require("../middleware/isAdminMiddleware");
const OfferController = require("../controller/OfferController");

router.get("/", OfferController.getAll);
router.delete("/:id", isAdminMiddleware, OfferController.removeOfferById);

module.exports = router;
