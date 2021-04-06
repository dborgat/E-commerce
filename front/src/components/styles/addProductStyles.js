import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    form: {
        margin: theme.spacing(20,10,40,80),
        
    },
    selectCategory: {
        margin: theme.spacing(0,10,3,5)
    }
}));

export default useStyles