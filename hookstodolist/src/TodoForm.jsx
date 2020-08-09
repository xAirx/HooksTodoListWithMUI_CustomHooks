/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
/* import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText'; */
import { makeStyles } from '@material-ui/core/styles';
import useInputState from './Hooks/useInputState';

function Todoform({ addTodo }) {
  const [value, HandleChange, reset] = useInputState('');

  const useStyles = makeStyles((theme) => ({
    muipaper: {
      /* root: { */
    /*   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', */
      border: 0,
      borderRadius: 3,
      /* boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', */
      /* color: 'white', */
      /* height: 48, */
      /*  padding: '0 30px', */
      /*       height: , */
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      /* } */
    },
  }));

  const classes = useStyles();
  /// // works but eslint hates it ? /////
  /*  const {...todos} = props.todos; */
  /// Correct way ///

  return (

    <Paper className={classes.muipaper} variant="outlined" square elevation={3}>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
      >
        <TextField value={value} onChange={HandleChange} />
        <Button type="submit">Submit</Button>
      </form>
    </Paper>

  );
}

export default Todoform;
