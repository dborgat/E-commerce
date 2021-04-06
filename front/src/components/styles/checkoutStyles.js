import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginBottom:'50%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    form: {
        margin: theme.spacing(10,20,15,15),
    },
    paymentMethod:{
        marginTop: '10%',
        marginLeft:'37%',
        display:'flex',
        justifyContent:"center"
    },
    center:{
        display:'flex',
        justifyContent:"center"
    }
}));

export default useStyles