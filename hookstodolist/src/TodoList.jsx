/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Todo from './Todos';

function TodoList({
  todos, removeTodo, toggleTodo, editTodo,
}) {
  // here we are overwriting everything in setTodos, we are going to pass in the existing todos
  // and then we will concatenate a new object.

  const useStyles = makeStyles((theme) => ({
    muipaper: {
      /* root: { */
      /*  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', */
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
  /*   const { todos, removeTodo } = props; */

  return (

    <>
      <Paper className={classes.muipaper} variant="outlined" square elevation={3}>
        <List>
          {todos.map((todo) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                todos={todos}
                completed={todo.completed}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                removeTodo={removeTodo}
              />
              <Divider />
            </>
          ))}
        </List>
      </Paper>
    </>

  );
}

export default TodoList;
