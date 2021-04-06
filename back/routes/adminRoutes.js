const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const passport = require("passport");

/////////////////////////////////USERS/////////////////////////////////

router
  .get(
    "/users",
    /* passport.authenticate("local"), */ adminController.findAllUsers
  )
  .put(
    "/users/:userid",
    /* passport.authenticate("local"), */
    adminController.editUser
  )
  .delete(
    "/users/:userid",
    /* passport.authenticate("local"), */
    adminController.deleteUser
  )
  .post("/logout", /* passport.authenticate("local"), */ adminController.logout)

  /////////////////////////////////PRODUCTS/////////////////////////////////

  .get(
    "/products",
    /* passport.authenticate("local"), */
    adminController.findAllProducts
  )
  .post("/products", adminController.addProduct)
  .put(
    "/products/:id",
    /* passport.authenticate("local"), */
    adminController.editProduct
  )
  .delete(
    "/products/:id",
    /* passport.authenticate("local"), */
    adminController.deleteProduct
  )

  /////////////////////////////////CATEGORIES/////////////////////////////////

  .post("/categories", adminController.addCategory)
  .put("/categories/:id", adminController.editCategory)
  .delete("/categories/:id", adminController.deleteCategory)

  /////////////////////////////////PURCHASES/////////////////////////////////
  .get("/purchases", adminController.findAllPurchases);

module.exports = router;
