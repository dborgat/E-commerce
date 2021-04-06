//REACT
import React, { useState, useEffect } from "react";

//MATERIAL UI
import {
  ListItem,
  Divider,
  List,
  Paper,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  CircularProgress,
} from "@material-ui/core";

//REDUX
import { getProduct, getPurchases } from "../redux/reducers/productReducer";
import { getCartProducts } from "../redux/reducers/cartProductsReducer";
import { useSelector, useDispatch } from "react-redux";

//COMPONENTS
import Account from "./Account";

//STYLE
import useStyles from "./styles/accountorders";

const AccountOrders = ({}) => {
  const dispatch = useDispatch();
  const mypurchases = useSelector((state) => state.purchases);
  const classes = useStyles();
  const [render] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProduct());
      dispatch(getCartProducts());
      dispatch(getPurchases());
    }, 1000);
  }, [render]);

  return (
    <div className={classes.roow}>
      <Account />

      <Paper variant="outlined" className={classes.paper}>
        {/* TERNARIO QUE MUESTRA UN LOADING HASTA QUE SE CARGUEN LAS ORDERS */}
        {mypurchases && mypurchases.length ? (
          <List
            style={{ maxHeight: 500, overflow: "auto" }}
            className={classes.list}
          >
            {mypurchases &&
              mypurchases.length &&
              mypurchases.map((item) => (
                <div>
                  <Typography style={{ marginTop: "10%" }}>
                    Date: {item.date}{" "}
                  </Typography>

                  {item.products &&
                    item.products.length &&
                    item.products.map((product) => (
                      <ListItem
                        className={classes.item}
                        alignItems="flex-start"
                      >
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={product.img} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="h6" color="textPrimary">
                                {product.name}
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                className={classes.price}
                                variant="h6"
                                component="span"
                                //className={classes.inline}
                                /* color="textPrimary" */
                                //variant="subtitle1"
                              >
                                Quantity: {product.quantity}
                              </Typography>
                              <Typography
                                className={classes.price}
                                variant="h6"
                                component="span"
                                //className={classes.inline}
                                /* color="textPrimary" */
                                //variant="subtitle1"
                              >
                                Price: {product.price}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                        <ListItemSecondaryAction
                          className={classes.buttonSec}
                        ></ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  <Divider variant="inset" component="li" />
                </div>
              ))}
          </List>
        ) : (
          <CircularProgress />
        )}
      </Paper>
    </div>
  );
};

export default AccountOrders;
