//REACT
import React from "react";

import axios from "axios";
import { useInput } from "../hooks/useInput";

//MATERIAL UI
import { Button, TextField, Box, Grid, Typography } from "@material-ui/core";

//STYLE
import useStyles from "./styles/addProductStyles";

// Debería renderizarse sólo para los ADMIN
const AddCategory = () => {
  const classes = useStyles();
  const categoryName = useInput("categoryName");

  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post("/api/admin/categories", { name: categoryName.value })
      .then((category) => category)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box className={classes.form}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Add a new category
            </Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...categoryName}
                  required
                  id="productName"
                  label="Category Name"
                  fullWidth
                />
              </Grid>

              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Add new Category
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
      <Grid item xs={12} sm={6}></Grid>
    </div>
  );
};

export default AddCategory;
