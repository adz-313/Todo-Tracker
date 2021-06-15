import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    todoContainer: {
        minHeight: "70vh",
        paddingLeft: "10px",
        paddingRight: "10px", 
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    appbar: {
        backgroundColor: "#fff",
        marginTop: "15px",
        
    }
}));