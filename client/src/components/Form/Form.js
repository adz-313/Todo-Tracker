import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';

//import useStyles from './styles';

const Form = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        title: '',
        isDone: false,
        createdAt: new Date()
    });

    //const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo.title)
        {
            alert('Enter a todo first');
            return;
        }
        addTodo(todo);
        setTodo({
            title: '',
            isDone: false,
            createdAt: new Date()
        });
    }

    return (
        <>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container alignItems="flex-end" spacing={2}>
                    <Grid item xs={10}>
                        <TextField
                            name="title"
                            variant="standard"
                            label="New todo"
                            fullWidth
                            value={todo.title}
                            onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                    </Grid>
                    <Grid item xs={2}>
                        <Button color="primary" size="large" type="submit" fullWidth >
                            Add
                        </Button>
                    </Grid>
                </Grid>                    
            </form>
        </>
    );
}

export default Form;