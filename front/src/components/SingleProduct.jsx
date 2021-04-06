//REACT
import React, { useEffect, useContext, useState } from "react";

//REDUX
import { getProductId } from "../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/reducers/productReducer";
import { addToCartProducts } from "../redux/reducers/cartProductsReducer";

//HOOKS
import setLocalStorage from "../hooks/useSetLS";

//COMPONENTS
import Product from "./Product";
//MATERIAL UI
import {
  Card,
  Typography,
  Box,
  Button,
  CardMedia,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles/singleProdStyles";
import Rating from "@material-ui/lab/Rating";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import AliceCarousel from "react-alice-carousel";

//CONTEXT
import { UserContext } from "../index";

//STYLE
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles/singleProd.css";

export default function RecipeReviewCard({ id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const products = useSelector((state) => state.products);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [counter, setcounter] = React.useState(1);
  const { user } = useContext(UserContext);
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("cart")));

  useEffect(() => {
    dispatch(getProductId(id));
    setcounter(1);
    dispatch(getProduct());
  }, [id]);

  useEffect(() => {}, [local]);

  const handleClick = (e) => {
    if (user._id) {
      dispatch(addToCartProducts(id));
    } else {
      setLocalStorage(
        singleProduct._id,
        singleProduct.name,
        singleProduct.price,
        singleProduct.img
      );
      setLocal(JSON.parse(localStorage.getItem("cart")));
    }
    alert('Added to the cart')
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = products?.map((product) => (
    <Product
      setLocal={setLocal}
      id={product._id}
      onDragStart={handleDragStart}
      name={product.name}
      price={product.price}
      img={product.img}
    />
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };
  return (
    <>
      {singleProduct._id ? (
        <>
          <div className={classes.ro}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                  {/* <FavoriteTwoToneIcon /> */}
                  <CardMedia
                    key={singleProduct._id}
                    className={classes.media}
                    image={singleProduct.img}
                    title={singleProduct.name}
                  />
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className={classes.rating}>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h4"
                  component="h3"
                >
                  {singleProduct.name}
                </Typography>
                <Typography
                  className={classes.subtitle}
                  gutterBottom
                  variant="h6"
                  component="h2"
                >
                  {singleProduct.description}
                </Typography>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h3"
                >
                  Price : {singleProduct.price}
                </Typography>

                {/* <Grid item xs={6} sm={3}>
                    <ButtonGroup className={classes.buttonSec} variant="outlined">
                      <Button
                        className={classes.button}
                        name="reduce"
                        aria-label="reduce"
                        onClick={() => {
                          setcounter(Math.max(counter - 1, 1));
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Typography className={classes.buttonBox}>
                        {counter}
                      </Typography>
                      <Button
                        className={classes.button}
                        name="increase"
                        aria-label="increase"
                        onClick={() => {
                          setcounter(counter + 1);
                          
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  
                  </Grid> */}

                <Box className={classes.addCart}>
                  <Button onClick={handleClick} variant="contained">
                    ADD TO CART
                  </Button>
                  <Button variant="contained">TO BUY</Button>
                </Box>
              </Grid>
            </Grid>
          </div>
          <Box className={classes.carousel}>
            <CardMedia>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h3"
              >
                SUGESTED PRODUCTS
              </Typography>
            </CardMedia>
            <AliceCarousel
              responsive={responsive}
              mouseTracking
              items={items}
            />
          </Box>
        </>
      ) : null}
    </>
  );
}
