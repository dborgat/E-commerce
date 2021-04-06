//REACT
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

//REDUX
import { useDispatch } from "react-redux";
import { addToCartProducts } from "../redux/reducers/cartProductsReducer";

//HOOKS
import { useInput } from "../hooks/useInput";
import { log, success, error } from "../utils/logs";

//CONTEXT
import { UserContext } from "../index";

//MATERIAL UI
import LocalBarIcon from "@material-ui/icons/LocalBar";
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

//STYLE
import { useStyles } from "./styles/loginStyles";

//COMPONENTS
import LoginError from "./LoginError";

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const email = useInput("email");
  const password = useInput("password");
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    log("login attempt...");
    try {
      // POST user credentials
      const { data } = await axios.post("/api/user/login", {
        email: email.value,
        password: password.value,
      });
      // Set new state
      setUser(data);
      //cart fusion and clear
      localStorage.setItem("email", data.email);

      const array = JSON.parse(localStorage.getItem("cart"));
      array?.map((item) => {
        dispatch(addToCartProducts(item.productId));
      });
      localStorage.setItem("cart", "[]");
      success(`logged user ${data.email}`);

      history.push("/");
    } catch ({ response }) {
      // something's not right...
      setUser({ error: "not valid" });
      error(console.log(response));
      //error(response.status, response.statusText);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalBarIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              {...email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...password}
              autoComplete="current-password"
            />
            {user.error && user.error ? <LoginError /> : null}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/register" variant="body2">
                  {" "}
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" className="text-reset">
                  Don't have an account? Register here
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
