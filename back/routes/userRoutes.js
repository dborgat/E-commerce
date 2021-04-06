const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");

router
  .post("/register", userController.create) //register
  .post("/login", passport.authenticate("local"), userController.login) // ver con los chicos!
  .post("/logout", userController.logout)
  .get("/me", userController.private)
  .get("/me/purchases", userController.purchases)

  .put("/:id", passport.authenticate("local"), userController.edit)
  .delete("/:id", passport.authenticate("local"), userController.delete);

module.exports = router;
