/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React, { useState } from 'react';
import '../css/style.css';
import {
  FormControlLabel, createMuiTheme, Switch,
  IconButton,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ThemeWrapper, useDarkmode } from './index';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

export default function MUIapp() {
  /*   Users might have specified a preference for a light or dark theme. The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the User Agent.

  You can leverage this preference dynamically with the useMediaQuery hook and the prefers-color-scheme media query.

  For instance, you can enable the dark mode automatically: */
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  const [themeObject, toggleDarkMode] = useDarkmode();
  console.log('THIS IS THEME INSIDE APP', themeObject);
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  const themeConfig = createMuiTheme(themeObject);
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  const useStyles = makeStyles((themeConfig) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: themeConfig.spacing(2),
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: themeConfig.spacing(1),
      paddingBottom: themeConfig.spacing(3),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'center',
    },
    muipaper: {
      /* root: { */
      /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', */
      border: 0,
      borderRadius: 3,
      /* boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', */
      /* color: 'white', */
      /* height: 48, */
      /*  padding: '0 30px', */
      height: '100vh',
      padding: themeConfig.spacing(2),
      textAlign: 'center',
      color: themeConfig.palette.text.secondary,
      /* } */
    },
  }));

  const classes = useStyles();
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////

  const initialTodos = [
    { id: 1, task: 'Buy Cucumber', completed: false },
    { id: 2, task: 'Buy Eggs', completed: true },
    { id: 3, task: 'Buy Bread', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };

  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  /// /////
  return (
    <ThemeWrapper theme={themeConfig}>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
            /* className={classes.menuButton} */
              color="primary"
              aria-label="open drawer"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Groceries App
            </Typography>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="display more actions" edge="end" color="inherit">
              <MoreVertIcon />
            </IconButton>
            <IconButton aria-label="display more actions" edge="end" color="inherit">
              <FormControlLabel control={<Switch onClick={toggleDarkMode} />} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper className={classes.muipaper} variant="outlined" square elevation={3}>
          <Grid container justify="center" style={{ marginTop: '1rem' }}>
            <Grid item xs={11} md={8} lg={4}>
              <TodoList todos={todos} />
              <TodoForm addTodo={addTodo} />
            </Grid>
          </Grid>
        </Paper>

      </div>
    </ThemeWrapper>
  );
}
