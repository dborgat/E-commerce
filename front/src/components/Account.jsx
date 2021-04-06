//REACT
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

//CONSOLE
import { log, success, error } from "../utils/logs";

//MATERIAL UI
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
//CONTEXT
import { UserContext } from "../index";

import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles/account";

const Account = () => {
  const classes = useStyles();
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    log("logout attempt...");
    try {
      await axios.post("/api/user/logout");
      setUser({});
      localStorage.removeItem("email");
      success("logged out");
      history.push("/");
    } catch ({ response }) {
      error(response.status, response.statusText);
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.root}>
        <Box border={1} borderColor="text.primary">
          <CardMedia>
            <Link className={classes.link} to="/account/">
              <Typography
                className={classes.title}
                gutterBottom
                variant="h3"
                component="h3"
              >
                My Account
              </Typography>
            </Link>

            <Typography
              className={classes.title}
              gutterBottom
              variant="h6"
              component="h3"
            >
              You are logging like {user.email ? user.email : null}
            </Typography>
            <hr />
            <Box className={classes.roow}>
              <Card className={classes.cardd}>
                <Button className={classes.roow}>
                  <PersonIcon style={{ fontSize: 40 }} />
                  <Link className={classes.link} to="/account/">
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h6"
                      component="h3"
                    >
                      MY DATA
                    </Typography>
                  </Link>
                </Button>
              </Card>
              <Card className={classes.cardd}>
                <Button className={classes.roow}>
                  <FavoriteIcon style={{ fontSize: 40 }} />
                  <Link className={classes.link} to="/account/orders">
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h6"
                      component="h3"
                    >
                      MY ORDERS
                    </Typography>
                  </Link>
                </Button>
              </Card>
              {user.isAdmin && (
                <Card className={classes.cardd}>
                  <Button className={classes.roow}>
                    <SupervisorAccountIcon style={{ fontSize: 40 }} />
                    <Link className={classes.link} to="/adminaccount">
                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h6"
                        component="h3"
                      >
                        ADMIN
                      </Typography>
                    </Link>
                  </Button>
                </Card>
              )}
              <Card className={classes.cardd}>
                <Button onClick={handleLogout} className={classes.roow}>
                  <ExitToAppIcon style={{ fontSize: 40 }} />

                  <Typography
                    className={classes.title}
                    gutterBottom
                    variant="h6"
                    component="h3"
                  >
                    Log Out
                  </Typography>
                </Button>
              </Card>
            </Box>
          </CardMedia>
        </Box>
      </Card>
    </Grid>
  );
};

export default Account;
