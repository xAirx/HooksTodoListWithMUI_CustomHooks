
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import React,{useState} from "react";
import { blue, pink } from '@material-ui/core/colors';
/*
function myTheme(themeName = 'light') {
 */
    const themeObject ={/* = createMuiTheme({ */
        /* themeName: "light", */
       /*  typography: {
            useNextVariants: true,
            fontFamily: [
                'lato',
                'Roboto',
                '"Helvetica Neue"',
                '-apple-system',
                'BlinkMacSystemFront',
                '"Segoe UI"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        }, */
        palette: {
            primary: {
                light:blue[800],
                main: blue[500],
                dark: blue[500],
            },
            secondary: {
                light:pink[800],
                main: pink[500],
                dark: pink[500],
            },
            type: 'light',
        },
    };

    console.log(themeObject);
    /* themeConfig = responsiveFontSizes(themeConfig); */

    const useDarkmode = () => {
        const [theme, setTheme] = useState(themeObject)
        console.log("THIS IS INSIDE USEDARKMODE");
        const { palette : { type }} = theme;
        const toggleDarkMode = () => {
        console.log("You called  ToggleDarkMode");
        console.log("THIS IS THEME.TYPE", theme.palette);
        const updatedTheme = {
              ...theme,
              palette: {
                    ...theme.palette,
                    type: type === 'light' ? 'dark' : 'light'
              }
        }
        setTheme(updatedTheme)
        console.log("THIS IS UPDATED THEME", updatedTheme);
        }
        console.log("THIS IS THEME", theme);
        return [theme,toggleDarkMode]
        };

 /*    return theme;
}
 */
export {themeObject, useDarkmode};
/*

https://egghead.io/lessons/react-create-a-react-hook-to-toggle-between-light-and-dark-mode-inside-of-material-ui-themes */