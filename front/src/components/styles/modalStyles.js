import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    modal: {
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: '0px',
    },
    paper: {
        border: '0px',
        display: "flex",
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        padding: theme.spacing(9),
    },
}));