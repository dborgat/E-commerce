//REACT
import React, { useEffect } from "react";

//MATERIAL UI
import {
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useInput } from "../hooks/useInput";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { addAdminProduct } from "../redux/reducers/adminReducer";
import { getCategories } from "../redux/reducers/categoryReducer";

//STYLE
import useStyles from "./styles/addProductStyles";

const AddProduct = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const productName = useInput("productName");
  const price = useInput("price");
  const origin = useInput("origin");
  const flavour = useInput("flavour");
  const productImg = useInput("productImg");
  const productDescription = useInput("productDescription");
  const productCategory = useInput("productCategory"); // debería manejar el input del select

  const categories = useSelector((state) => state.allCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAdminProduct({
        name: productName.value,
        price: price.value,
        origin: origin.value,
        flavour: flavour.value,
        img: productImg.value,
        description: productDescription.value,
        category: productCategory.value,
      })
    );
  };

  return (
    <div>
      <Box className={classes.form}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Add a new product
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...productName}
                  required
                  id="productName"
                  label="Product title"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...price}
                  required
                  id="price"
                  label="Price"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...origin}
                  required
                  id="origin"
                  label="Origin"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...flavour}
                  required
                  id="flavour"
                  label="Flavour"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...productImg}
                  required
                  id="city"
                  label="Product image"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...productDescription}
                  multiline
                  rows={2}
                  rowsMax={4}
                  required
                  id="productDescription"
                  label="Product Description"
                  fullWidth
                />
              </Grid>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Product Category
                </Typography>
              </Box>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                {...productCategory}
                className={classes.selectCategory}
              >
                {categories.length &&
                  categories.map((category) => (
                    <MenuItem value={category._id}>{category.name}</MenuItem>
                  ))}
              </Select>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Add new product
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
      <Grid item xs={12} sm={6}></Grid>
    </div>
  );
};

export default AddProduct;
