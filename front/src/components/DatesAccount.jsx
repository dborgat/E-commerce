//REACT
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Account from "./Account";

//MATERIAL UI
import { Card, Grid, Typography, Box, CardMedia } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

//CONTEXT
import { UserContext } from "../index";

//STYLE
import useStyles from "./styles/datesAccount";

const DatesAccount = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return (
    <Grid container className={classes.all}>
      <Account />

      <Grid item xs={12} sm={6}>
        <Card className={classes.root2}>
          <Box>
            <CardMedia>
              <Link className={classes.link} to="/account/">
                <Typography
                  className={classes.title3}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  My Dates
                </Typography>
              </Link>

              <Box className={classes.roow}>
                <Card>
                  <Typography
                    className={classes.title2}
                    gutterBottom
                    variant="h6"
                    component="h3"
                  >
                    Fullname: {user.firstname} {user.lastname}
                  </Typography>
                  <Typography
                    className={classes.title2}
                    gutterBottom
                    variant="h6"
                    component="h3"
                  >
                    Email: {user.email}
                  </Typography>
                  <Typography
                    className={classes.direct}
                    gutterBottom
                    variant="h6"
                    component="h3"
                  >
                    Password:
                    <Box className={classes.box}>
                      <FiberManualRecordIcon />
                      <FiberManualRecordIcon />
                      <FiberManualRecordIcon />
                      <FiberManualRecordIcon />
                    </Box>
                  </Typography>
                </Card>
                <hr />
              </Box>

              <Card className={classes.roow}>
                <Typography
                  className={classes.title2}
                  gutterBottom
                  variant="h6"
                  component="h3"
                >
                  Address: {user.address}
                </Typography>
              </Card>
              <hr />
            </CardMedia>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DatesAccount;
