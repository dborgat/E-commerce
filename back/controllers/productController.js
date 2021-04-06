const { Product } = require("../models/"); // ver chicos!!

const productController = {
  findAll(req, res, next) {
    Product.find({})
      .then((products) => res.status(200).send(products))
      .catch(next);
  },
  findById(req, res, next) {
    Product.findOne({ _id: req.params.id })
      .then((productFound) => res.status(200).send(productFound))
      .catch(next);
  },
  findByName(req, res, next) {
    Product.find({ name: { $regex: req.query.name, $options: "i" } })
      .exec()
      .then((productsFound) => res.status(200).send(productsFound))
      .catch((e) => res.status(500).send(e));
  },
};

module.exports = productController;
