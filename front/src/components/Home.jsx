//REACT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//REDUX
import { getProduct } from "../redux/reducers/productReducer";
import { getCartProducts } from "../redux/reducers/cartProductsReducer";

//COMPONENT
import Product from "./Product";
import Banners from "../utils/banners";

//CARROUSEL React
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//MODAL MATERIAL UI
import { Modal, Button } from "@material-ui/core";

//STYLE
import "./styles/Home.css";
import { useStyles } from "./styles/modalStyles";

function Home( {local, setLocal} ) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCartProducts());
  }, []);

  //Carrousel function
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = products.map((product) => (
    <Product
      setLocal={setLocal}
      id={product._id}
      onDragStart={handleDragStart}
      name={product.name}
      price={product.price}
      img={product.img}
    />
  ));

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("adult", true);
  };

  return (
    <div>
      {localStorage.getItem("adult") || localStorage.getItem("email") ? null : (
        <Modal
          disableAutoFocus={true}
          disablePortal={true}
          className={classes.modal}
          open={open}
          disableEnforceFocus
        >
          <div className={classes.paper}>
            <p>Do you declare you are +18?</p>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              YES, I DO
            </Button>
          </div>
        </Modal>
      )}
      <AliceCarousel
        items={Banners}
        autoPlay={true}
        autoPlayInterval={2500}
        infinite={true}
        disableDotsControls={true}
      />

      <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        disableButtonsControls={true}
      />
    </div>
  );
}

export default Home;
