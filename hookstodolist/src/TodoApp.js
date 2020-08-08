import React, {useEffect, useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components'



function TodoApp() {

    return (
        // Using it as a container for everything that has a background color
        <Paper variant="outlined" square  elevation={3}>
            Test
        </Paper>
    )
}

export default TodoApp


/* -TodoApp  */
/// will manage the state for our todos
//localstorage, api http requests.
/*
    -TodoForm
    -TodoList
        -TodoItem */