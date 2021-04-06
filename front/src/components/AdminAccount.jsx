//REACT
import React from "react";
import { Link } from "react-router-dom";

//MATERIAL UI
import AddIcon from "@material-ui/icons/Add";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  CardMedia,
} from "@material-ui/core";

//COMPONENTS
import Account from "./Account";

//STYLE
import useStyles from "./styles/account";

const AdminAccount = () => {
  const classes = useStyles();

  return (
    <Box className={classes.adminBox}>
      <Account />
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardMedia>
            <hr />
            <Box className={classes.roow}>
              <Card className={classes.cardd}>
                <Button className={classes.roow}>
                  <LocalBarIcon style={{ fontSize: 40 }} />
                  <Link to="/addproduct">
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h6"
                      component="h3"
                    >
                      Add a new Product
                    </Typography>
                  </Link>
                </Button>
              </Card>
              <Card className={classes.cardd}>
                <Button className={classes.roow}>
                  <AddIcon style={{ fontSize: 40 }} />
                  <Link to="/addcategory">
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h6"
                      component="h3"
                    >
                      Add a new Category
                    </Typography>
                  </Link>
                </Button>
              </Card>

              <Card className={classes.cardd}>
                <Button className={classes.roow}>
                  <SupervisorAccountIcon style={{ fontSize: 40 }} />
                  <Link to="/adminaccount/allusers">
                    {/* Va a redirigirte a al componente 'AllUsers' */}
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h6"
                      component="h3"
                    >
                      Show all Users
                    </Typography>
                  </Link>
                </Button>
              </Card>

              <Card className={classes.cardd}>
                <Button className={classes.roow}>
                  <FormatListBulletedIcon style={{ fontSize: 40 }} />
                  <Link to="/adminaccount/allorders">
                    {/* Va a redirigirte a al componente 'AllOrders' */}
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h6"
                      component="h3"
                    >
                      Show orders list
                    </Typography>
                  </Link>
                </Button>
              </Card>
              <Card className={classes.cardd}>
                <Button className={classes.roow}>
                  <FormatListBulletedIcon style={{ fontSize: 40 }} />
                  <Link to="/adminaccount/allproducts">
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h6"
                      component="h3"
                    >
                      Show products list
                    </Typography>
                  </Link>
                </Button>
              </Card>
            </Box>
          </CardMedia>
        </Card>
      </Grid>
    </Box>
  );
};

export default AdminAccount;
