import React from "react";
import "./../css/style.css";
import TodoApp from '../TodoApp';
import {useMediaQuery} from '@material-ui/core';
import {ThemeWrapper, myTheme} from './index';
import { Button} from '@material-ui/core';

 export default function MUIapp() {
/*   Users might have specified a preference for a light or dark theme. The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the User Agent.

You can leverage this preference dynamically with the useMediaQuery hook and the prefers-color-scheme media query.

For instance, you can enable the dark mode automatically: */

      const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
      const theme = React.useMemo(
            () => myTheme(prefersDarkMode ? "dark" : "light"),
            [prefersDarkMode]
      );

  return (
      <ThemeWrapper theme={theme}>
            <div className="App">
            <TodoApp />
            <Button color="Secondary">test</Button>
            <h1>TEST</h1>
            </div>
      </ThemeWrapper>
  );
}


/* https://egghead.io/lessons/react-create-a-react-hook-to-toggle-between-light-and-dark-mode-inside-of-material-ui-themes */
/*
https://medium.com/@vamci07/theming-guide-in-react-with-material-ui-and-styled-components-d5f142261fec

https://egghead.io/lessons/react-create-a-react-hook-to-toggle-between-light-and-dark-mode-inside-of-material-ui-themes */