//REACT
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//MATERIAL
import { Button } from "@material-ui/core";

//CSS
import "./styles/Product.css";
import { useStyles } from "./styles/productStyles";

//REDUX
import { useDispatch } from "react-redux";
import { addToCartProducts } from "../redux/reducers/cartProductsReducer";

//CONTEXT
import { UserContext } from "../index";

//HOOKS
import setLocalStorage from "../hooks/useSetLS";

function Product({ id, name, price, img, setLocal }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);
  const handleClick = (e) => {
    if (user._id) {
      dispatch(addToCartProducts(id));
      
    } else {
      setLocalStorage(id, name, price, img);
      setLocal(JSON.parse(localStorage.getItem("cart")));
    }
    alert('Added to the cart')
  };

  return (
    <>
      <Link
        to={`/products/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="product">
          <img src={img} alt="product_img" />
          <div className="product__info">
            <p>{name}</p>
          </div>
          <p className="product__price">
            $<strong>{price}</strong>
          </p>
        </div>
      </Link>
      <div className="product_add__div">
        <Button
          onClick={handleClick}
          color="secondary"
          className={classes.button}
          variant="contained"
        >
          Add to cart
        </Button>
      </div>
    </>
  );
}

export default Product;
