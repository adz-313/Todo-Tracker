import axios from 'axios';

const API = axios.create({ baseURL:'https://todo-tracker-313.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchTodos = () => API.get('/todos');

export const createTodo = (newTodo) => API.post('/todos', newTodo);

export const deleteTodo = (id) => API.delete(`/todos/${id}`);

export const markAsComplete = (id) => API.patch(`/todos/${id}/markAsComplete`);

export const signIn = (formData) => API.post('/users/signin', formData);

export const signUp = (formData) => API.post('/users/signup', formData);
