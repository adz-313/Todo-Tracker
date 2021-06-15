import React from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import moment from 'moment';

import useStyles from './styles';

const Todo = ({ todo, removeTodo, setCurrentId }) => {
    const classes = useStyles();
    const handleEdit = () => {
        setCurrentId(todo._id);
    }

    return (
        <Grid container alignItems="center" className={todo.isDone ? classes.completedTodo : classes.todo}>
            <Grid item xs={6}>
                <Typography noWrap variant="h5" className={!todo.isDone ? classes.title : classes.completedTitle}>{todo.title}</Typography>
                <Typography variant="body1" className={classes.date}>{moment(todo.createdAt).format("MMM Do YYYY")}</Typography>
            </Grid>
            <Grid container xs={6} direction="row" justify="flex-end">
                <Grid item> 
                    <IconButton onClick={handleEdit}>
                        {todo.isDone ? <CloseIcon className={classes.deleteIcon}/> : <DoneIcon className={classes.completeIcon} />}
                    </IconButton>
                </Grid>
                {todo.isDone ? 
                    <Grid item>
                        <IconButton className={classes.deleteIcon} onClick={() => removeTodo(todo._id)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Grid> : 
                    null
                }
            </Grid>
        </Grid>
    )
}

export default Todo
