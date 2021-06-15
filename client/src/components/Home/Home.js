import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import Form from '../Form/Form'
import Todos from '../Todos/Todos';
import { fetchTodos, createTodo, deleteTodo, markAsComplete } from '../../api/index';

const Home = () => {
    const classes = useStyles();

    const [todos, setTodos] = useState([]);

    const [currentId, setCurrentId] = useState(null);
    const getTodos = async () => {
        const todosFromServer = await fetchTodos();
        setTodos(todosFromServer.data);
    }

    useEffect(() => {
        getTodos();
    }, []);

    const removeTodo = async (id) => {
        await deleteTodo(id);
        const todosFromServer = await fetchTodos();
        setTodos(todosFromServer.data);
    }

    const addTodo = async (todo) => {
        await createTodo(todo);
        const todosFromServer = await fetchTodos();
        setTodos(todosFromServer.data);
    }

    useEffect(() => {
        if (currentId) {
            markTodoAsComplete();
        }
        setCurrentId(null);
    }, [currentId]);

    const markTodoAsComplete = async () => {
        await markAsComplete(currentId);
        const todosFromServer = await fetchTodos();
        setTodos(todosFromServer.data);
    }


    return (
        <Container>
            <Form addTodo={addTodo} />
            {todos.length > 0 ?
                <Todos todos={todos} removeTodo={removeTodo} setCurrentId={setCurrentId} /> :
                <Grid container justify="center" alignItems="center" className={classes.noTodos}>
                    <Grid item >
                        <Typography variant="h5">
                            This feels empty. Add a todo now!
                        </Typography>
                    </Grid>
                </Grid>}
        </Container>
    )
}

export default Home
