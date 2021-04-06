//REACT
import React from "react";

//MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>You are now logged in </strong>
      </Alert>
    </div>
  );
}
