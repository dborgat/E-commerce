import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "5%",
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
    display: "flex",
    flexDirection: "column",
    justifyContent:"flex-start",
    marginLeft:"6%",
    maxHeight: "85.3%",
    maxWidth: "80%",

  },

  cardd: {
    display: "flex",
    height: "20%",
    width: "90%",
    marginTop: "8.3%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
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
     paddingBottom:'10%',
  
  
  } ,
  root2:{
    maxHeight: "85.3%",
    maxWidth: "80%",
      marginRight:'10%',
      marginTop:'5%'
  },
  title2:{
      display:'flex',
      marginLeft:'5%',
      marginTop:'5%',
      flexDirection:'column',
      textDecoration:'underline',
      alignItems:'center',
      justifyContent:'center'

  },
  title3:{
    display:'flex',
      marginLeft:'7%',
      marginTop:'5%',
      flexDirection:'column',
      textDecoration:'underline',
  },
  box:{
    display:'flex',
    flexDirection:'row',
  
  },
  direct:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'5%'
  }
}));

export default useStyles;
