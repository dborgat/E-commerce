const { Cart } = require("../models");
const { Product } = require("../models");
const { User } = require("../models");
const chalk = require("chalk");

const cartController = {
  findAll(req, res, next) {
    User.findById(req.user._id).then((userFound) => {
      console.log(chalk.magenta(userFound));
      Cart.findOne({ user: userFound._id }) //El carrito se crea junto con el usuario
        .then((cartPopulated) => {
          console.log(chalk.blue(cartPopulated));
          res.status(200).send(cartPopulated);
        })
        .catch(next);
    });
  },

  addToCart(req, res, next) {
    User.findById(req.user._id) //Busco el usuario
      .then((userFound) => {
        Cart.findOne({ user: userFound._id }) //Busco el carrito de ese usuario
          .populate("product")
          .then((cartToPush) => {
            Product.findById({ _id: req.params.id }) //Busco el producto para agregar
              .then((product) => {
                // en caso de que no exista pushea
                let prodNames = cartToPush.product.map(
                  (product) => product.productId
                );
                let boolean = prodNames.indexOf(product._id) == -1;
                if (boolean) {
                  cartToPush.product.push({
                    productId: product._id,
                    name: product.name,
                    quantity: product.quantity,
                    price: product.price,
                    img: product.img,
                  });
                } else {
                  cartToPush.product[prodNames.indexOf(`${product._id}`)] = {
                    productId: product._id,
                    name: product.name,
                    quantity:
                      cartToPush.product[prodNames.indexOf(`${product._id}`)]
                        .quantity + 1,
                    price: product.price,
                    img: product.img,
                  };
                }
                let totalProduct = cartToPush.product.map(
                  (product) => product.quantity
                );
                let totalMoney = cartToPush.product.map(
                  (product) => product.price * product.quantity
                );
                cartToPush.totalProducts = totalProduct.reduce(
                  (a, b) => a + b,
                  0
                );
                cartToPush.totalMoney = totalMoney.reduce((a, b) => a + b, 0);
                cartToPush.save();
                res.status(204).send(cartToPush);
              });
          });
      });
  },


  removeFromCart(req, res, next) {
    User.findById(req.user._id) //Busco el usuario
      .then((userFound) => {
        Cart.findOne({ user: userFound._id }) //Busco el carrito de ese usuario
          .populate("product")
          .then((cartToPush) => {
            Product.findById({ _id: req.params.id }) //Busco el producto para agregar
              .then((product) => {
                // en caso de que no exista pushea
                let prodNames = cartToPush.product.map(
                  (product) => product.productId
                );
                let boolean = prodNames.indexOf(product._id) == -1;
                if (boolean) {
                  cartToPush.product.push({
                    productId: product._id,
                    name: product.name,
                    quantity: product.quantity,
                    price: product.price,
                    img: product.img,
                  });
                } else {
                  cartToPush.product[prodNames.indexOf(`${product._id}`)] = {
                    productId: product._id,
                    name: product.name,
                    quantity:
                      cartToPush.product[prodNames.indexOf(`${product._id}`)]
                        .quantity - 1,
                    price: product.price,
                    img: product.img,
                  };
                }
                let totalProduct = cartToPush.product.map(
                  (product) => product.quantity
                );
                let totalMoney = cartToPush.product.map(
                  (product) => product.price * product.quantity
                );
                cartToPush.totalProducts = totalProduct.reduce(
                  (a, b) => a + b,
                  0
                );
                cartToPush.totalMoney = totalMoney.reduce((a, b) => a + b, 0);
                cartToPush.save();
                res.status(204).send(cartToPush);
              });
          });
      });
  },


  deleteFromCart(req, res, next) {
    User.findById(req.user._id).then((userFound) => {
      //encuentro el USER
      Cart.findOne({ user: userFound._id }) // encuentro el carrito de ese USER
        .then((cartToFilter) => {
          Product.findById({ _id: req.params.id }).then((productToFilter) => {
            const productsId = cartToFilter.product.map((product) => product.productId);
            const index = productsId.indexOf(productToFilter._id);
            const borrado = cartToFilter.product.splice(index,1);
            cartToFilter.save();
            res.status(204).send(cartToFilter);
          });
        })
        .catch(next);
    });
  },
  //  PARA EDITAR LA QUANTITY DE UN PRODUCTO VAMOS A NECESITAR
  // 1. ENCONTRAR UN USUARIO (DONE)
  // 2. ENCONTRAR EL CARRITO DE ESE USER (DONE)
  // 3. ENCONTRAR Y EDITAR EL PRODUCTO, EDITANDO EL SCHEMA (DONE)
  // 4. PISAR EL PRODUCTO POR EL PRODUCTO EDITADO
  // 5. VOLVER A EDITAR PARA QUE QUEDE EN 1
  //

  editProductQuantity(req, res) {
    User.findById(req.user._id) //Busco el usuario
      .then((userFound) => {
        Cart.findOne({ user: userFound._id }) //Busco el carrito de ese usuario
          .populate("product")
          .then((cartToEdit) => {
            // encuentro el carrito y lo edito
            let product = cartToEdit.product.map((produ) => produ._id); // HAGO UN MAP PARA TENER TODOS LOS ID EN UN ARRAY
            let productSinNull = product.filter(product => product != null);
            let index = productSinNull.indexOf(`${req.params.id}`); // GUARDO EL INDEX DEL PROD QUE ESTOY BUSCANDO EN UNA VARIABLE
            let productToEdit = cartToEdit.product[index]; // USO EL INDEX PARA ACCEDER AL INDEX DEL PRODUCTO EN EL CARRITO
            console.log('producto a editar', productToEdit);
            console.log('productos del carrito', product);
            console.log('productos del sin null', productSinNull);
            console.log('req.params.id', req.params.id); // ACA ESTÁ EL BARDO
            console.log('INDEX', index);
            console.log('CARRITO', cartToEdit.product);
            Product.findByIdAndUpdate(
              //BUSCO UN PRODUCTO Y LO EDITO
              { _id: req.params.id }, //LE DIGO QUE PRODUCTO QUIERO EDITAR
              { quantity: productToEdit.quantity + 1 }, 
              function (err, result) {
                if (err) {
                  res.status(404).send(err);
                } else {
                  // res.send("EDITADO -->", result);
                  res.status(200).send(result);
                }
              }
            ).then((quantityProductEdit) => {
              //ME DEVUELVE UN PRODUCTO CON LA QUANTITY EDITADA
              User.findById(req.user._id) //Busco el usuario
                .then((userFound) => {
                  Cart.findOne({ user: userFound._id }) //Busco el carrito de ese usuario
                    .populate("product")
                    .then((cartToEdit) => {
                      // UNA VEZ QUE TENGO EL CARRITO
                      let product = cartToEdit.product.map(
                        (produ) => produ.productId
                      ); // HAGO UN MAP PARA TENER TODOS LOS ID EN UN ARRAY
                      let index = product.indexOf(`${req.params.id}`); // GUARDO EL INDEX DEL PROD QUE ESTOY BUSCANDO EN UNA VARIABLE
                      let newQuantity = quantityProductEdit.quantity;
                      
                      let borrado = cartToEdit.product.splice(index,1) 

                      cartToEdit.product.push(quantityProductEdit)
                      cartToEdit.save();

                      console.log(
                        "-------ACA schema EDITADO--->",
                        quantityProductEdit.quantity
                      );
                      console.log(
                        "--------> aca CARRITO: ",
                        cartToEdit.product
                      );

                    });
                });
            });
          });
      });
    // .then(() => {
    //   console.log('--------->', req.params.id);
    //   Product.findByIdAndUpdate(
    //     //BUSCO UN PRODUCTO Y LO EDITO
    //     { _id: req.params.id }, //LE DIGO QUE PRODUCTO QUIERO EDITAR
    //     { quantity: 1 }, //LE DIGO QUE LA QUANTITY VUELVA A SER 1
    //     function (err, result) {
    //       if (err) {
    //         res.status(404).send(err);
    //       } else {
    //         // res.send("EDITADO -->", result);
    //         res.status(200).send(result);
    //       }
    //     }
    //   );
    // });
  },

};

module.exports = cartController;
