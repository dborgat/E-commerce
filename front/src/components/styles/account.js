import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5%",
    marginBottom: "10%",
    maxHeight: "85.3%",
    maxWidth: "80%",
    marginLeft: "9%",
  },
  title: {
    marginTop: "7%",
    marginLeft: "3%",
    textDecoration: "none",
    color: "inherit",
    display:'flex',
    justifyContent:'center'
  },
  roow: {
    marginTop: "4%",
    height:'30%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  cardd: {
    display: "flex",
    height: "20%",
    width: "90%",
    justifyContent: "center",
    marginTop: "4%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  adminBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: "18%",
  },
  accountForm: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    marginBottom: "18%",
    marginTop: "5%",
  },
  paymentMethod: {
    marginTop: "2%",
    marginLeft: "2.5%",
  },
  link:{
    textDecoration:'none',
    color:"inherit"
  },
  all:{
      display:'flex',
      flexDirection:'row',
        marginBottom:'10%'
  } ,
  root2:{
      height:'65%',
      width:'98',
      marginRight:'10%',
      marginTop:'5%'
  },
  title2:{
      display:'flex',
      marginLeft:'5%',
      marginTop:'5%',
      flexDirection:'column'
  }
}));

export default useStyles;
