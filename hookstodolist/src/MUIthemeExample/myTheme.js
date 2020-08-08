import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';


function myTheme(themeName = 'light') {
    let theme = createMuiTheme({
        themeName: "Light",
        typography: {
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
        },
        palette: {
            type: themeName,
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
        },
    });

    theme = responsiveFontSizes(theme);
    return theme;
}

export default myTheme;
