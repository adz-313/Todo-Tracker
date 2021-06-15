import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Paper, Container } from '@material-ui/core';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import NotSignedIn from './components/NotSignedIn/NotSignedIn';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  const [user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <BrowserRouter>
      <Container className={classes.root} maxWidth="md">
        <Paper className={classes.paper}>
          <Header user={user} setUser={setUser}/>
          <Switch>
            {user ? <Route path="/" exact component={Home} /> : <Route path="/" exact component={NotSignedIn} />}
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Paper>
      </Container>
    </BrowserRouter>
  );
}

export default App;
