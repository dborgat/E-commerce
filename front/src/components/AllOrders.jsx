//REACT
import React, { useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../redux/reducers/adminReducer";

//MATERIAL UI

import {
  List,
  Paper,
  Grid,
  ListItem,
  Divider,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

//STYLE
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    overflow: "hidden",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#fbfbfbfb",
  },
  paperTitle: {
    textAlign: "center",
    backgroundColor: "#fbfbfbfb",
    width: "20%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5),
  },
  firstBut: {
    marginRight: "2%",
    marginBottom: "3%",
  },
}));

function AllOrders() {
  const ordersAll = useSelector((state) => state.allOrders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {items &&
          items.map((item) => (
            <Grid item xs={4}>
              <Paper elevation={3} className={classes.paper}>
                {item}
              </Paper>
            </Grid>
          ))}
      </React.Fragment>
    );
  }

  const items =
    ordersAll.length > 0 &&
    ordersAll.map((orders) => (
      <>
        <div className={classes.roow}>
          <Paper variant="outlined" className={classes.paper}>
            <List
              style={{ maxHeight: 500, overflow: "auto" }}
              className={classes.list}
            >
              <Typography style={{ marginTop: "10%" }}>
                Email: {orders.user.email}
              </Typography>
              <Typography style={{ marginTop: "10%" }}>
                Date: {orders.date}{" "}
              </Typography>
              {orders.products &&
                orders.products &&
                orders.products.map((product) => {
                  return (
                    <div>
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
                              >
                                Quantity: {product.quantity}
                              </Typography>
                              <hr />
                            </React.Fragment>
                          }
                        />
                        <ListItemSecondaryAction
                          className={classes.buttonSec}
                        ></ListItemSecondaryAction>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </div>
                  );
                })}
            </List>
          </Paper>
        </div>
      </>
    ));

  return (
    <div>
      <div className={classes.titleContainer}>
        <Paper elevation={5} className={classes.paperTitle}>
          <Typography variant="h3">All Orders</Typography>
        </Paper>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AllOrders;
