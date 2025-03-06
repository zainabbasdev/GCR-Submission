const express = require("express");
const router = express.Router();
const AmanatController = require("../controllers/amanatBookController");
const { protect, admin } = require("../middleware/authMiddleware");

// Create or update a khata entry
router.post("/add", protect, admin, AmanatController.createAmanat);

// Get khata for a specific person
router.get(
  "/getamanat/:personName",
  protect,
  admin,
  AmanatController.getAmanatByPerson
);

// Update a khata entry
router.post("/update", protect, admin, AmanatController.updateAmanat);

// Get all khata records
router.get("/getall", protect, admin, AmanatController.getAllAmanat);

module.exports = router;
