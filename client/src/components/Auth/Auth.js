import React, { useState } from 'react'
import { Button, Typography, Paper, Avatar, Grid, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import { signIn, signUp } from '../../api/index';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setIsSignup] = useState(false);

    const [formData, setFormData] = useState(initialState);

    const history = useHistory();

    const frontSignUp = async () => {
        try {
            const { data } = await signUp(formData); 

            localStorage.setItem('profile', JSON.stringify( data ));

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const frontSignIn = async () => {
        try {
            const { data } = await signIn(formData); 

            localStorage.setItem('profile', JSON.stringify( data ));

            history.push('/');
        } catch (error) {
            alert(error.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup)
        {
            frontSignUp();
        } else {
            frontSignIn();
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            localStorage.setItem('profile', JSON.stringify({ result, token }));
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
    };

    return (
        <Container component='main' maxWidth='xs' className={classes.main}>
            <Typography variant='h5'>{isSignup ? 'Sign up' : 'Sign in'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}> 
                    {isSignup && (
                        <>
                            <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                            <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                        </> 
                    )}
                    <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    {isSignup ? 'Sign up' : 'Sign in'}
                </Button>
                <GoogleLogin 
                    clientId='320266898555-a52r99l7def1ropf21rk7ahuvt297hke.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <Button 
                            className={classes.googleButton}
                            color='primary'
                            fullWidth
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<Icon />}
                            variant='contained'
                        >
                            Sign in with Google
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />
                <Grid container justify='flex-end'>
                    <Grid item >
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Auth
