//REACT
import React, { useEffect, useState } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdminProducts,
  deleteAdminProduct,
} from "../redux/reducers/adminReducer";

//MATERIAL UI
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper, Button } from "@material-ui/core/";
import { Typography } from "@material-ui/core";

//STYLE
import "./styles/CategoryProduct.css";

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
    maxWidth: "20%",
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

function AllProducts() {
  const [render, setRender] = useState(false);
  const allproducts = useSelector((state) => state.allAdminProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (render) {
      setRender(false);
    }
    dispatch(getAllAdminProducts());
  }, [render]);

  const handleDelete = (productID) => {
    dispatch(deleteAdminProduct(productID));
    setRender(true);
  };

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
    allproducts.length > 0 &&
    allproducts.map((product) => (
      <>
        <div className="product">
          <div className="product__info">
            <p>{product.name}</p>
          </div>
          <Avatar
            style={{ height: "30%", width: "30%", marginBottom: "10%" }}
            src={product.img}
          />
          <p className="product__price">
            <strong>$ {product.price}</strong>
          </p>
        </div>

        <div className="product_add__div">
          <Button
            onClick={() => {
              handleDelete(product._id);
            }}
            color="secondary"
            className={classes.firstBut}
            variant="contained"
          >
            Delete
          </Button>
        </div>
      </>
    ));

  return (
    <div>
      <div className={classes.titleContainer}>
        <Paper elevation={5} className={classes.paperTitle}>
          <Typography variant="h3">All Products</Typography>
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

export default AllProducts;
