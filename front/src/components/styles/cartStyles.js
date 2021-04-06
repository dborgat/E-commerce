import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-around',
   },
  item: {
    padding: theme.spacing(3),
    height: '150px'
  },
  title: {
    fontSize: 30
  },
  inline: {
    display: 'inline',
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    width: '100%'
  },
  padding: {
    padding: theme.spacing(0, 1),
  },
  amountSection: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  amount1: {
    margin: theme.spacing(2),
  },
  amount2: {
    margin: theme.spacing(2),
  },
  amount3: {
    margin: theme.spacing(0, 1),
  },
  payment: {
    margin: theme.spacing(2, 0),
  },
  link:{
    textDecoration:'none',
    color:'inherit'
  },
  carousel:{
    margin: theme.spacing(0, 8),
  },
  buttonBox:{
    border: '1px solid #9e9e9e ',
    textAlign:'center',
    padding: theme.spacing(0.7,0),

  },
  buttonSec:{
    margin: theme.spacing(3),
  },
  delete:{
    margin: theme.spacing(0,2,1,1),
  }

}))

export default useStyles