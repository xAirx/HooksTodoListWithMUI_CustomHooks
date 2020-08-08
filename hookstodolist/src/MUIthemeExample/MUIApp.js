import React,{useState} from "react";
import "./../css/style.css";
import TodoApp from '../TodoApp';
import {useMediaQuery, FormControlLabel, createMuiTheme} from '@material-ui/core';
import {ThemeWrapper, themeObject, useDarkmode} from './index';
import { Button} from '@material-ui/core';
import { Switch, FromControlLabel } from '@material-ui/core';



 export default function MUIapp() {
/*   Users might have specified a preference for a light or dark theme. The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the User Agent.

You can leverage this preference dynamically with the useMediaQuery hook and the prefers-color-scheme media query.

For instance, you can enable the dark mode automatically: */

      /* const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
      const themeConfig = React.useMemo(
            () => myTheme(prefersDarkMode ? "dark" : "light"),
            [prefersDarkMode]
      ); */

       const [themeObject, toggleDarkMode] = useDarkmode();
       console.log("THIS IS THEME INSIDE APP", themeObject);

       const themeConfig = createMuiTheme(themeObject)

  return (
      <ThemeWrapper theme={themeConfig}>
            <div className="App">
            <TodoApp />
            <FormControlLabel control={<Switch onClick={toggleDarkMode} />} />
            <Button color="Secondary">test</Button>
            <h1>TEST</h1>
            </div>
      </ThemeWrapper>
  );
}
