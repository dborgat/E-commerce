const { User } = require("../models"); // ver chicos!!
const { Product } = require("../models");
const { Category } = require("../models");
const { Purchase } = require("../models");
const chalk = require("chalk");

const adminController = {
  findAllUsers(req, res, next) {
    User.find({})
      .then((users) => res.status(200).send(users))
      .catch(next);
  },
  editUser(req, res, next) {
    User.findByIdAndUpdate(req.params.userid, req.body)
      .then((userUpdated) => {
        res.status(201).send(userUpdated);
      })
      .catch(next);
  }, /// COMO HACER QUE NO PUEDA MODIFICAR EL ADMIN ROL (USER NORMAL)
  deleteUser(req, res, next) {
    User.findByIdAndDelete(req.params.userid)
      .then((deletedUser) => {
        res.status(200).send(deletedUser + "BORRADO");
      })
      .catch(next);
  },
  logout(req, res, next) {
    req.logOut();
    res.sendStatus(200);
  },

  /////////////////////////////////PRODUCTS/////////////////////////////////

  findAllProducts(req, res, next) {
    Product.find({})
      .then((products) => res.status(200).send(products))
      .catch(next);
  },
  addProduct(req, res, next) {
    //console.log(chalk.blue(req.body.category));
    Product.create(req.body)
      .then((newProduct) => {
        console.log(chalk.magenta(newProduct));
        return res.status(201).send(newProduct);
      })
      .catch(next);
  },

  editProduct(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body, (err, updated) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send("Product updated!");
      }
    });
  },

  deleteProduct(req, res, next) {
    Product.findByIdAndDelete(req.params.id)
      .then((deletedProduct) => {
        res.status(200).send(deletedProduct + "BORRADO");
      })
      .catch(next);
  },

  /////////////////////////////////CATEGORIES/////////////////////////////////

  addCategory(req, res, next) {
    Category.create(req.body)
      .then((newCategory) => res.status(201).send(newCategory))
      .catch(next);
  },

  deleteCategory(req, res, next) {
    Category.findByIdAndDelete(req.params.id)
      .then((deletedCategory) => {
        //console.log(chalk.blue(deletedCategory.name));
        return res.status(200).send(deletedCategory.name);
      })
      .catch(next);
  },

  editCategory(req, res, next) {
    Category.updateOne({ _id: req.params.id }, req.body, (err, updated) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send("Category updated!");
      }
    });
  },

  findAllPurchases(req, res, next) {
    Purchase.find({})
      .populate("user")
      .then((purchases) => res.send(purchases))
      .catch(next);
  },
};
module.exports = adminController;
