import React, { useState } from "react";
import "./../css/style.css";
import { useMediaQuery, FormControlLabel, createMuiTheme } from '@material-ui/core';
import { ThemeWrapper, themeObject, useDarkmode } from './index';
import { Button } from '@material-ui/core';
import { Switch, FromControlLabel } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';

export default function MUIapp() {
  /*   Users might have specified a preference for a light or dark theme. The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the User Agent.

  You can leverage this preference dynamically with the useMediaQuery hook and the prefers-color-scheme media query.

  For instance, you can enable the dark mode automatically: */



  const [themeObject, toggleDarkMode] = useDarkmode();
  console.log("THIS IS THEME INSIDE APP", themeObject);



  const themeConfig = createMuiTheme(themeObject)


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
      paddingBottom: themeConfig.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
    muipaper: {
      /* root: { */
              /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', */
              border: 0,
              borderRadius: 3,
              /* boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', */
              color: 'white',
              height: 48,
              padding: '0 30px',
              height:'100vh',
       /* } */
      },
  }));

  const classes = useStyles();


  return (
    <ThemeWrapper theme={themeConfig}>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Material-UI
          </Typography>
          <IconButton aria-label="search" color="inherit">
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
           {/*  <MoreIcon /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu">
              <Typography variant="h6" color="inherit">
                <FormControlLabel control={<Switch onClick={toggleDarkMode} />} />
              </Typography>
              </IconButton>
            </Toolbar>
          </AppBar>
        <Paper  className={classes.muipaper} variant="outlined" square elevation={3}>
        </Paper>
      </div>
    </ThemeWrapper>
  );
}
