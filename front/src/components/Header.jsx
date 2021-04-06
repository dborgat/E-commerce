//REACT
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import clsx from "clsx";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/reducers/categoryReducer";

//MATERIAL UI
import {
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//CONTEXT
import { UserContext } from "../index";

//CSS
import useStyles from "./styles/Header";

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const cart = useSelector((state) => state.cartProducts);

  const { user } = useContext(UserContext);
  const [inputSearch, setInputSearch] = useState("");
  const [state, setState] = useState({ categories: false });
  const [local] = useState(JSON.parse(localStorage.getItem("cart")));
  const categories = useSelector((state) => state.allCategories);

  const onChange = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearch.length > 0) {
      history.push(`/products/search/${inputSearch}`);
    }
    setInputSearch("");
  };

  const ProductCount = () => {
    if (cart.product) {
      return cart.product.length;
    } else if (local) {
      return local.length;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {}, [user]);
  useEffect(() => {}, [local]);
  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  }, []);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "categories",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories.length &&
          categories.map((text) => (
            <ListItem button key={text.name}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/category/${text.name.toLowerCase()}`}
              >
                <ListItemText primary={text.name} />
              </Link>
            </ListItem>
          ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <Typography variant="h6" className={classes.title}>
              {/* <img className={classes.images} src="drunk.png" /> */}
              Drunkart
            </Typography>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={onChange}
                value={inputSearch}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </form>
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: 1100,
                }}
                onClick={toggleDrawer(anchor, true)}
              >
                Categories
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          {localStorage.getItem("email") ? (
            <div>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/account"
              >
                <Button color="inherit">
                  <Avatar src="/broken-image.jpg" />
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/register"
          >
            <Button color="inherit">Register</Button>
          </Link>
            </div>
          )}

          <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
            <Button color="inherit">
              <ShoppingCartIcon />
              <span>{ProductCount()}</span>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
