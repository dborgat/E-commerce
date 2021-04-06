import { makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
 
  
  cardGrid:{
      padding:'20px 0'
  },

  cardMedia:{
      paddingTop: '140%'
  },
  cardContent:{
      flexGrow:1,
  },



  ButtonFav:{
    
    height: '3',
    paddingRight:'40px'
  },
  paperContainer: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/prueba3.jpg'})`,
    // backgroundRepeat: 'no-repeat',
  
},
link:{
  textDecoration:'none',
  color:"inherit"
}

  
  
}))


export default useStyles;


