import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 roow:{
     display:'flex',
     flexFlow:'row',
    
 },
 
 paper: {
     marginTop:'2.5%',
     marginBottom:'5%',
     marginLeft:'2%',
     marginRight:'10%',
     height:'90%',
    padding: theme.spacing(6),
    width: '30%'
  },
  grid:{
      marginLeft:'20%',
    //  paddingLeft:'40%'
  }
}));

export default useStyles;
