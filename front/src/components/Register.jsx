//REACT
import React from "react";
import { Link, useHistory } from "react-router-dom";

//HOOKS
import { useInput } from "../hooks/useInput";

//REDUX
import { useDispatch } from "react-redux";
import { createUser } from "../redux/reducers/userReducer";

//MATERIAL UI
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import LocalBarIcon from "@material-ui/icons/LocalBar";

//STYLE
import { useStyles } from "./styles/registerStyles";

//FIREBASE
import { auth } from "../firebase";

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const firstName = useInput("firstName");
  const lastName = useInput("lastName");
  const email = useInput("email");
  const password = useInput("password");
  const age = useInput("age");
  const address = useInput("address");

  //Firebase Auth register
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(() => {
        dispatch(
          createUser({
            firstname: firstName.value,
            lastname: lastName.value,
            age: age.value,
            email: email.value,
            password: password.value,
            address: address.value,
          })
        );
      })
      .then(() => {
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalBarIcon variant="outlined" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  {...firstName}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  {...lastName}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  {...email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  {...age}
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  {...password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  {...address}
                  label="Address"
                  type="text"
                  id="address"
                  autoComplete="current-address"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" className="text-reset">
                  Already have an account? Login here
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
