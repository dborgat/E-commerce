const { Cart } = require("../models");
const { Product } = require("../models");
const { User } = require("../models");
const { Purchase } = require("../models");
const { purchaseConfirmation } = require("../controllers/emails");
const chalk = require("chalk");
const cartController = require("./cartController");
const checkoutController = {
  checkout(req, res, next) {
    res.send("Ruta del checkout"); //Hablarlo con los chicos
  },

  confirmCheckout(req, res, next) {
    let orderDate = new Date().toString();
    User.findById(req.user._id).then((userFound) => {
      //Buscar el usuario
      Cart.findOne({ user: userFound._id }) //Buscar el cart
        //.populate("product") //Lo populo con productos
        .then((cartFound) => {
          //console.log(chalk.yellow(cartFound.product));
          //console.log(chalk.blue(JSON.stringify(cartFound)))
          Purchase.create({
            user: userFound._id,
            products: cartFound.product,
            date: orderDate,
          })
            .then((newPurchase) => {
              let productsName = newPurchase.products.map(
                (producto) => producto.name
              );
              //console.log(chalk.greenBright(newPurchase));
              purchaseConfirmation(
                userFound.email,
                userFound.firstname,
                productsName,
                userFound.address
              );
              //LA LINEA DE ABAJO PUEDE CRASHEAR
              // Cart.findOneAndUpdate(
              //   { user: userFound._id },
              //   {
              //     product: [{}],
              //   },
              //   function (err, carritoCambiado) {
              //     if (err) {
              //       console.error(err);
              //     }
              //   }
              // );
              //LA LINEA DE ARRIBA PUEDE CRASHEAR
              Cart.deleteOne({ user: userFound._id }, function (err) {
                if (err) {
                  console.error(err);
                  res.send("Not deleted");
                }
              });
              Cart.create({
                user: userFound._id,
              });
              res.status(201).send(newPurchase.products);
            })
            .catch(next);
        });
    });
  },
};

module.exports = checkoutController;
