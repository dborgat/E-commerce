import React, {  useState, useEffect } from "react";
import { Link } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addToCartProducts, getCartProducts, removeToCartProducts } from "../redux/reducers/cartProductsReducer";
import { deleteCartProduct } from "../redux/reducers/cartProductsReducer";

import removeProduct from "../hooks/removefromcart";
//MATERIAL UI
import {
  ListItem,
  Divider,
  Button,
  ButtonGroup,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles/cartStyles";
import useSetLS from "../hooks/useSetLS";

export default function CartItem({ item, id, setLocal }) {
  const classes = useStyles();
  const [count, setCount] = useState(item.quantity);
  const [render, setRender] = useState(false)
  const cartProduct = useSelector((state) => state.cartProducts);
  const quantityOfItems = useSelector((state) => state.editCartProducts); //estado de redux que fue seteado con el pedido al carrito del back
  const dispatch = useDispatch();


  //------------------FUNCIONES LOGUEADO DE ADD Y REMOVE
  const handleUp = () => {
    dispatch(addToCartProducts(item.productId));
    setRender(true);
    setCount(Math.max(item.quantity + 1, 1));
  }
  const handleDown = () => {
    dispatch(removeToCartProducts(item.productId));
    setRender(true);
    setCount(Math.max(item.quantity - 1, 1));
  }

  useEffect(() => {
    dispatch(getCartProducts())
    if(render) {
      setRender(false);
    }
  }, [render])

  //------------------FUNCIONES LOGUEADO DE ADD Y REMOVE



  const handleDelete = () => {
    if (localStorage.getItem("email")) {
      dispatch(deleteCartProduct(item.productId));
    } else {
      removeProduct(item.productId);
      setLocal(JSON.parse(localStorage.getItem("cart")));
    }
  };

  const { productId, name, price, img, quantity } = item;
  const HandleClick = (action) => {
    const count = action == "add" ? quantity + 1 : Math.max(quantity - 1, 1);
    useSetLS(productId, name, price, img, count);
    setLocal(JSON.parse(localStorage.getItem("cart")));
  };
  
  return (
    <div>
      <ListItem className={classes.item} alignItems="flex-start">
        <ListItemAvatar>
          <Link to={`/products/${item.productId}`}><Avatar alt="Remy Sharp" src={item.img} /></Link>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography variant="h6" color="textPrimary">
                {item.name}
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
                Price: {item.price}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction className={classes.buttonSec}>
          <ButtonGroup variant="outlined">
            <Button
              className={classes.button}
              name="reduce"
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(item.quantity - 1, 1));
                HandleClick("remove");
              }}
              onClick={ localStorage.getItem('email') ? handleDown : () => {
                setCount(item.quantity - 1);  
                HandleClick("remove");
              }} 
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Typography className={classes.buttonBox}>{item.quantity}</Typography>
            <Button
              className={classes.button}
              name="increase"
              aria-label="increase"
              onClick={ localStorage.getItem('email') ? handleUp : () => {
                setCount(item.quantity + 1);  
                HandleClick("add");}} 
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <IconButton aria-label="delete" className={classes.delete}>
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}
