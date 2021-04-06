//REACT
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

//CONTEXT
import { UserContext } from "../index";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts } from "../redux/reducers/cartProductsReducer";
//MATERIAL UI

import {
  Typography,
  List,
  Grid,
  Button,
  Divider,
  Paper,
} from "@material-ui/core";

//COMPONENTES
import CartItem from "./CartItem";

//Styles
import useStyles from "./styles/cartStyles";

const Cart = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { user } = useContext(UserContext);
  //SELECTORES
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("cart"))); 
  const addToCartProducts = useSelector(state => state.addToCartProducts)
  const stateItems = useSelector((state) => state.cartProducts); //estado de redux que fue seteado con el pedido al carrito del back
  const items = user._id
    ? stateItems.product //BACK
    : local; //LOCALSTORAGE
  //TotalMoney desde LocalStorage
  const reducer = (accumulator, current) =>
    accumulator + current.price * current.quantity;
  let totalMoney = items ? items.reduce(reducer, 0) : 0;

  const handleDragStart = (e) => e.preventDefault();
  //concat o spread operator para aniadir al carrito del back y luego un clear del carrito del local

  useEffect(() => {
    const emailLS = localStorage.getItem("email");
    if (emailLS) {
      dispatch(getCartProducts());
    }
  }, []);

  useEffect(() => {}, [local]);

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={3} xs={5}>
          <Typography variant="h4">Your Cart</Typography>
          <Grid item container>
            <Paper variant="outlined" className={classes.paper}>
              <List
                style={{ maxHeight: 500, overflow: "auto" }}
                className={classes.list}
              >
                {items?.map((item) => (
                  <CartItem setLocal={setLocal} item={item} />
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
        <div className={classes.amountSection}>
          <div className={classes.amount1}>
            <Grid container alignItems="center">
              <Grid container direction="column" item xs>
                <Typography gutterBottom variant="h4">
                  Total Amount:
                </Typography>
                <Grid item>
                  <Divider />
                  <Typography
                    className={classes.payment}
                    gutterBottom
                    variant="h5"
                  >
                    {`$ ${items ? totalMoney.toFixed(2) : 0.0}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="body2">
              Proceed to chechout clicking this button:
            </Typography>
          </div>
          <div className={classes.amount3}>
            <Link to="/checkout" className={classes.link}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                color="secondary"
              >
                CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
