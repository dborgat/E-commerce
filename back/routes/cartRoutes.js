const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router
  .get("/", cartController.findAll)
  .post("/:id", cartController.addToCart) // agregar producto por ID
  .post("/remove/:id", cartController.removeFromCart) // remove producto por ID
  .delete("/:id", cartController.deleteFromCart) //Borra un articulo
  .put("/:id", cartController.editProductQuantity); // Edita Cantidad de un Producto

module.exports = router;
