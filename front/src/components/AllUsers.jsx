//REACT
import React, { useEffect, useState } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdminsUsers,
  editAdminUser,
  deleteAdmin,
} from "../redux/reducers/adminReducer";

//MATERIAL UI
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper, Button } from "@material-ui/core/";
import { Typography } from "@material-ui/core";

//STYLE
import "./styles/CategoryProduct.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    overflow: "hidden",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#fbfbfbfb",
  },
  paperTitle: {
    textAlign: "center",
    backgroundColor: "#fbfbfbfb",
    width: "20%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5),
  },
  firstBut: {
    marginRight: "2%",
    marginBottom: "3%",
  },
}));

function AllUsers() {
  const [render, setRender] = useState(false);
  const allUsers = useSelector((state) => state.allAdminsUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (render) {
      setRender(false);
    }
    dispatch(getAllAdminsUsers());
  }, [render]);

  const handleDelete = (userID) => {
    dispatch(deleteAdmin(userID));
    setRender(true);
  };

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {items &&
          items.map((item) => (
            <Grid item xs={4}>
              <Paper elevation={3} className={classes.paper}>
                {item}
              </Paper>
            </Grid>
          ))}
      </React.Fragment>
    );
  }

  const items =
    allUsers.length > 0 &&
    allUsers.map((user) => (
      <>
        <div className="product">
          <div className="product__info">
            <p>
              {user.firstname} {user.lastname}
            </p>
          </div>
          <Avatar style={{ marginBottom: "10%" }} src="/broken-image.jpg" />
          <p className="product__price">
            <strong>{user.email}</strong>
          </p>
        </div>

        <div className="product_add__div">
          <Button
            // onClick={() => {

            //   handleEdit(user._id)

            // }}
            color="secondary"
            className={classes.firstBut}
            variant="contained"
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              handleDelete(user._id);
            }}
            color="secondary"
            className={classes.firstBut}
            variant="contained"
          >
            Delete
          </Button>
        </div>
      </>
    ));

  return (
    <div>
      <div className={classes.titleContainer}>
        <Paper elevation={5} className={classes.paperTitle}>
          <Typography variant="h3">All Users</Typography>
        </Paper>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AllUsers;
