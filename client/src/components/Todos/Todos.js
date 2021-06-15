// import React from 'react'
// import { Grid } from '@material-ui/core';

// import Todo from './Todo/Todo';
// import useStyles from './styles';

// const Todos = ({ todos, removeTodo, setCurrentId }) => {
//     const classes = useStyles();
//     return (
//         <Grid direction="column" spacing={3} className={classes.todoContainer} container alignItems="center" justify="flex-start">
//             {
//                 todos.map((todo) => (
//                     <Todo key={todo._id} todo={todo} removeTodo={removeTodo} setCurrentId={setCurrentId}/>
//                 ))
//             }
//         </Grid>
//     )
// }

// export default Todos

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Todo from './Todo/Todo';
import useStyles from './styles';
import TabPanel from './TabPanel';


export default function Todos({ todos, removeTodo, setCurrentId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
        <AppBar className={classes.appbar} position="static" >
            <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
                <Tab label="Active" {...a11yProps(0)} />
                <Tab label="Completed" {...a11yProps(1)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Grid direction="column" spacing={3} className={classes.todoContainer} container alignItems="center" justify="flex-start">
                {
                    todos.filter((todo) => todo.isDone === false).                   
                    map((todo) => <Todo key={todo._id} todo={todo} removeTodo={removeTodo} setCurrentId={setCurrentId}/>)
                }
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid direction="column" spacing={3} className={classes.todoContainer} container alignItems="center" justify="flex-start">
                {
                    todos.filter((todo) => todo.isDone === true).                   
                    map((todo) => <Todo key={todo._id} todo={todo} removeTodo={removeTodo} setCurrentId={setCurrentId}/>)
                }
            </Grid>
        </TabPanel>
      
      
    </div>
  );
}
