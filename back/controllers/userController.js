const { User } = require("../models"); // ver chicos!!
const { Cart } = require("../models");
const { sendConfirmation } = require("./emails");
const { Purchase } = require("../models");
const chalk = require("chalk");

const userController = {
  //register
  create(req, res, next) {
    const email = req.body.email;
    const name = req.body.firstname;
    User.create(req.body)
      .then((newUser) => {
        Cart.create({
          user: newUser._id,
        });
        res.status(201).send(newUser);
      })
      .then(() => sendConfirmation(email, name)) //Se manda el email
      .catch(next);
  },
  //login
  login(req, res, next) {
    res.status(202).send(req.user);
  },
  edit(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then((userUpdated) => {
        res.status(201).send(userUpdated);
      })
      .catch(next);
  }, /// COMO HACER QUE NO PUEDA MODIFICAR EL ADMIN ROL (USER NORMAL)
  delete(req, res, next) {
    User.findByIdAndDelete(req.params.id)
      .then(() => (deletedUser) => res.send(deletedUser + "BORRADO"))
      .catch(next);
  },
  logout(req, res, next) {
    req.logOut();
    res.sendStatus(200);
  },
  private(req, res, next) {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.status(200).send(req.user);
  },

  /////////////////////////////////PURCHASES/////////////////////////////////
  purchases(req, res, next) {
    Purchase.find({ user: req.user._id }, function (err, purchase) {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        // console.log(chalk.green(purchase));
        res.send(purchase);
      }
    });
  },
};
module.exports = userController;
