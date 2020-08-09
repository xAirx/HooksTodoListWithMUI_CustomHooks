import React,{useState} from "react";
import "./../css/style.css";
import {useMediaQuery, FormControlLabel, createMuiTheme} from '@material-ui/core';
import {ThemeWrapper, themeObject, useDarkmode} from './index';
import { Button} from '@material-ui/core';
import { Switch, FromControlLabel } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";





 export default function MUIapp() {
/*   Users might have specified a preference for a light or dark theme. The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the User Agent.

You can leverage this preference dynamically with the useMediaQuery hook and the prefers-color-scheme media query.

For instance, you can enable the dark mode automatically: */



       const [themeObject, toggleDarkMode] = useDarkmode();
       console.log("THIS IS THEME INSIDE APP", themeObject);

       const themeConfig = createMuiTheme(themeObject)

  return (
      <ThemeWrapper theme={themeConfig}>
            <div className="App">
            <Paper  /* className={"Paper-root"} */ variant="outlined" square  elevation={3}>
              <FormControlLabel control={<Switch onClick={toggleDarkMode} />} />
              <h1>TEST</h1>
              <Button color="secondary">test</Button>

            </Paper>
            </div>
      </ThemeWrapper>
  );
}
