/* @import "react-alice-carousel/lib/alice-carousel.css"; */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    maxWidth: 500,
    marginLeft: 200,
  },
  media: {
    height: 390,

    paddingTop: "56.25%", // 16:9
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "relative",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },

  addCart: {
    display: "flex",
    position: "right",
    justifyContent: "space-around",
    marginTop: "10%",
    marginLeft: "-60%",
    padding:'0 450px',
    spacing: 2,
  },
  ro: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  rating: {
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    marginLeft: "22%",
  },
  title: {
    marginTop: "3%",
    marginRigth: "30%",
  },
  subtitle: {
    marginTop: "3%",
    /*aca se tiene que hacer que se divida la tipografia */
  },
  carousel: {
    margin: "5%",
  },
  counter: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  buttonBox: {
    border: "1px solid #9e9e9e ",
    textAlign: "center",
    padding: theme.spacing(0.7, 0),
  },
  buttonSec: {
    margin: theme.spacing(4,0),
  },
  delete: {
    margin: theme.spacing(0, 2, 1, 1),
  },
}));

export default useStyles;
