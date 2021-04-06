//REACT
import React, { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getCategoryByName } from "../redux/reducers/categoryReducer";

//MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, LinearProgress, Typography } from "@material-ui/core/";

//COMPONENTS
import Product from "./Product";

//STYLE
import "./styles/CategoryProduct.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "10%",
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

function CategoryProduct({ id, setLocal }) {
  const categoryProducts = useSelector((state) => state.singleCategory.data);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getCategoryByName(id));
  }, [id]);
  const handleDragStart = (e) => e.preventDefault();

  const items = categoryProducts?.map((product) => (
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
        <Paper className={classes.paperTitle}>
          <Typography variant="h3">
            {categoryProducts ? (
              categoryProducts[0].category[0].name.toUpperCase()
            ) : (
              <LinearProgress />
            )}
          </Typography>
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

export default CategoryProduct;
