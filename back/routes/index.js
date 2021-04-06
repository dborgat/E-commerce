const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const categoriesRoutes = require("./categoriesRoutes");
const cartRoutes = require("./cartRoutes");
const checkoutRoutes = require("./checkoutRoutes");

router
  .use("/user", userRoutes)
  .use("/admin", adminRoutes)
  .use("/products", productRoutes)
  .use("/categories", categoriesRoutes)
  .use("/cart", cartRoutes)
  .use("/checkout", checkoutRoutes)

module.exports = router;
