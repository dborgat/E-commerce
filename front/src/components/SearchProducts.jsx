//REACT
import React, { useEffect } from "react";

//COMPONENTS
import Product from "./Product";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProductName } from "../redux/reducers/productReducer";
//MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core";

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
    width: "20%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5),
  },
}));

function SearchProduct({ name, setLocal }) {
  const productName = useSelector((state) => state.productName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductName(name));
  }, [name]);

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

  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items =
    productName.length > 0 &&
    productName.map((product) => (
      <Product
        setLocal={setLocal}
        id={product._id}
        onDragStart={handleDragStart}
        name={product.name}
        price={product.price}
        img={product.img}
      />
    ));

  return (
    <div>
      <div className={classes.titleContainer}>
        <Paper elevation={5} className={classes.paperTitle}>
          <Typography variant="h3">Search Results</Typography>
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

export default SearchProduct;
