const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/categoriesController')

router.get("/", categoryController.findAll ) // MENU
      .get("/:name", categoryController.findByName ) // CATEGORIA SINGULAR

module.exports = router;

