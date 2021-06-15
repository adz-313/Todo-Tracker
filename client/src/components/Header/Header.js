import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Avatar } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import useStyles from './styles';

const Header = ({ user, setUser }) => {
    
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        setUser(null);
        localStorage.clear();
        history.push('/');
    };

    const classes = useStyles();
    
    useEffect(() => {
        const newUser = JSON.parse(localStorage.getItem('profile'));
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()){
                logout();
            }
        }
        setUser(newUser);
    }, [location]);

    return (
        <Grid container="xs" alignItems="center">
            <Grid item sm={9}>
                <Typography variant="h3">Todos Tracker</Typography>
            </Grid>
            <Grid item sm={3}>
                {user ? (
                    <div>
                        <Grid container justify="flex-end">
                            <Grid item className={classes.userInfo}>
                                <Grid container>
                                    <Grid item>
                                        <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                    </Grid>
                                    <Grid item className={classes.username}>
                                        <Typography variant="h6">{user.result.name}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button color="primary" variant="contained" onClick={logout}>Logout</Button>
                            </Grid>
                        </Grid>                        
                    </div>
                ) : (
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default Header
