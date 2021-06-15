import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    todo: {
        '&:hover': {
            backgroundColor: "#eee",
            cursor: "pointer"
        },
        '&:first-child': {
            marginTop: "20px"
        },
        marginBottom: "10px",
        backgroundColor: "#f5f5f5",
        padding: "10px",
        maxHeight: "90px", 
        borderColor: "#311b92",
        border: "1px",
        borderStyle: "solid",
        borderColor: "#311b92",
        borderRadius: "5px"
    },
    completedTodo: {
        '&:hover': {
            backgroundColor: "#7e57c2",
            cursor: "pointer",
            color: "#fff"
        },
        '&:first-child': {
            marginTop: "20px"
        },
        marginBottom: "10px",
        backgroundColor: "#9575cd",
        padding: "10px",
        maxHeight: "90px", 
        border: "1px",
        borderStyle: "solid",
        borderColor: "#311b92", 
        borderRadius: "5px",
        color: "#000"
    },
    title: {
        margin: "0",
    },
    completedTitle: {
        margin: "0",
        textDecoration: "line-through"
    },
    completeIcon: {
        '&:hover': {
            color: "#43a047"
        },
        color: "#000"
    },
    deleteIcon: {
        '&:hover': {
            color: red[500]
        },
        color: "#000"
    }
}));