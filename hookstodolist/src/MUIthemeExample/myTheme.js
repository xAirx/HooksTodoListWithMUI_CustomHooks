
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { blue, pink } from '@material-ui/core/colors';


/*
function myTheme(themeName = 'light') {
 */


const themeObject = {/* = createMuiTheme({ */
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
    },
};



console.log(themeObject);
/* themeConfig = responsiveFontSizes(themeConfig); */

const useDarkmode = () => {

    const MatchMedia =  window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log("MatchMEDIA: THE PREFFERED MODE IS DARK", MatchMedia);



    let localTheme = window.localStorage.getItem('theme');
    if(localTheme) {
        console.log("LocalStorage is set->THIS IS THE ORIGNIALLOCALTHEME", localTheme)
    }else {
        console.log("No localTheme set yet-> no localStorage");
    }


    let isLocalTheme = "";

    ////// Setting isLocalTheme to true or false so we can compare it to Matchmedia which is a boolean
    if(localTheme && localTheme === "dark") {
        isLocalTheme = true;
        console.log("I set isLocalTheme to true val:", isLocalTheme);
    }else if (localTheme && localTheme === "light") {
        isLocalTheme = false;
        console.log("I set isLocalTheme to false val:", isLocalTheme);
    }else {
        console.log("NO LOCALSTORAGE SET YET");
        console.log("SETTING default theme to matchmedia");
        if(MatchMedia === true){
            themeObject.palette.type = "dark";
            }else{
            themeObject.palette.type = "light";
            }
    }

    console.log("THIS IS LOCALTHEME BEFORE CHECK: ", isLocalTheme);
    console.log("THIS IS MATCHMEDIA BEFORE CHECK: ", MatchMedia);


    if(localTheme && isLocalTheme !== MatchMedia) {
        themeObject.palette.type = localTheme;
        console.log("isLocalTheme is NOT equal to MatchMedia, I set the LocalStorage mode");
    }else if(localTheme && isLocalTheme === MatchMedia) {
        themeObject.palette.type = "dark";
        console.log("isLocalTheme is equal to MatchMedia, I set the Preffered mode to MatchMedia");
    } else {
        console.log("NO LOCALSTORAGE SET YET");
        console.log("SETTING default theme to matchmedia");
        if(MatchMedia === true){
            themeObject.palette.type = "dark";
            }else{
            themeObject.palette.type = "light";
            }
    }



    const [theme, setTheme] = useState(themeObject)

    console.log("THIS IS INSIDE USEDARKMODE");
    const { palette: { type } } = theme;
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

        if (updatedTheme.palette.type === 'light') {
            window.localStorage.setItem('theme', 'light');
            console.log("THIS IS LOCALSTORAGE",window.localStorage.getItem('theme'))
          } else {
            window.localStorage.setItem('theme', 'dark');
            console.log("THIS IS LOCALSTORAGE",window.localStorage.getItem('theme'))
          };

        setTheme(updatedTheme)
        console.log("THIS IS UPDATED THEME", updatedTheme);



            ////// Set localStorage /////

    }
    console.log("THIS IS THEME", theme);
    return [theme, toggleDarkMode]
};

/*    return theme;
}
*/
export { themeObject, useDarkmode };
/*

https://egghead.io/lessons/react-create-a-react-hook-to-toggle-between-light-and-dark-mode-inside-of-material-ui-themes */