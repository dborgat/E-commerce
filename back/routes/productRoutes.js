const express = require("express");
const router = express.Router();

const productController = require('../controllers/productController')

router.get("/all", productController.findAll )
      .get("/:id", productController.findById )
      .get("/", productController.findByName )


module.exports = router;
