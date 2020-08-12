import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { blue, pink, purple } from '@material-ui/core/colors';

/*
function myTheme(themeName = 'light') {
 */

/* const themeObject = {

  palette: {
    primary: {
      light: blue[800],
      main: blue[500],
      dark: blue[500],
    },
    secondary: {
      light: pink[800],
      main: pink[500],
      dark: pink[500],
    },

  }
}; */

const lightTheme = {

  palette: {
    primary: {
      light: blue[800],
      main: blue[500],
      dark: blue[500],
    },
    secondary: {
      light: pink[800],
      main: pink[500],
      dark: pink[500],
    },
    type: 'light',
    background: {
      paper: '#9c27b0',
    },
  },
};

const darkTheme = {

  palette: {
    primary: {
      dark: '#9c27b0',

      light: '#6a1b9a',

      main: '#9c27b0',
    },
    secondary: {
      dark: '#9c27b0',

      light: '#6a1b9a',

      main: '#9c27b0',
    },
    type: 'dark',
  },
};

let themeObject = lightTheme;

/* {
  PaletteType === 'light' ? (
    themeObject = lightTheme
  ) : (
    themeObject = darkTheme
  );
}
 */
/* console.log(themeObject); */
/* themeConfig = responsiveFontSizes(themeConfig); */

const useDarkmode = () => {
  const [theme, setTheme] = useState(themeObject);

  console.log('THIS IS INSIDE USEDARKMODE');
  const toggleDarkMode = () => {
    console.log('You called  ToggleDarkMode');
    console.log('THIS IS THEME.TYPE', themeObject);
    const updatedTheme = {
      ...themeObject,
      type: themeObject === lightTheme ? themeObject = darkTheme : themeObject = lightTheme,
    };
    setTheme(updatedTheme);
    console.log('THIS IS THEME', theme);
  };
  return [theme, toggleDarkMode];
};

/*    return theme;
    }
    */
export { themeObject, useDarkmode };
/*

https://egghead.io/lessons/react-create-a-react-hook-to-toggle-between-light-and-dark-mode-inside-of-material-ui-themes */
