/* eslint-disable max-len */
import React from 'react';
import '../css/style.css';
/* import Paper from '@material-ui/core/Paper'; */
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types'; // ES6
import theme from 'styled-theming';
/* import Counter from '../ClassvsHooks/Counter/CounterClass';
import CounterHooks from '../ClassvsHooks/Counter/CounterHooks';
import { Toggler } from '../ClassvsHooks/Toggler/Toggler';
import SimpleformHooks from '../ClassvsHooks/Form/SimpleFormhooks';
import Clicker from '../ClassvsHooks/useEffect/Clicker';
import SWMovies from '../ClassvsHooks/useEffect/SWMovies';
import SWMovies2 from '../ClassvsHooks/useEffect/SWMoviesv2'; */

/// /////////////////// Styled Theming Example ////////////////////

export default function StyledThemingApp() {
  return (
  /*     styled-theming makes it easier to manage themes
  by allowing you to declare your themes alongside your components
  instead of at the top of your app.
  Instead of passing down values from the root of your app, you pass down names instead. */

    <ThemeProvider theme={{ mode: 'dark', layout: 'compact' }}>
      <Wrapper>
        <StyledContent>
          {/* <Paper  variant="outlined" square  elevation={3}> */}
          <Button small>
            Sign in
          </Button>
          {/*       </Paper> */}
        </StyledContent>
      </Wrapper>
    </ThemeProvider>
  );
}

/*
https://jamie.build/styled-theming.html

https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54

https://medium.com/@rossbulat/react-dark-mode-with-styled-theming-and-context-57557de6400

 */

/* https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54 */

/// // CAN BE PUT IN ITS OWN FILE /THEME. and then we export all the constants.

// define background colours for `mode` themeconst backgroundColor = theme('mode', {
const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
});

// define text color for `mode` themeconst textColor = theme('mode', {
const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

// apply theming to a styled componentconst Wrapper = styled.div`

const Wrapper = styled.div`
background-color: ${backgroundColor};
color: ${textColor}
`;

/* /////////////////////////// Multi dimensional theming///////////////////////////////////////////////////
We are not limited to only one theme name — we could define an
additional name, let’s say, layout, that determines how compact
the app content is: */
/*
Then when you declare your components, you can use the theme helper.  */

/* theme() is a tiny little function that returns another function which you can use as a value in styled-components.
It looks up the correct value using the theme prop you provided to <ThemeProvider>.  */

/* //////////////////////////////////////////////////////////////////
 */

/* ///////////////////////////////// Theme Variants/////////////////////////////////////////////////////// */
/* Along with theme(), styled-theming also gives us a nother utility: theme.variants(). Wouldn’t it be nice if we could
have a concise way to define a range of styles for a component based
on props? I could then tailor my button styles by simply passing props,
like <Button small /> or <Button medium /> — that will also be fully
compatible with my themes.
/* This is the problem theme.variants() aim to solve.
 */

/* // defining our `layout` theme properties based on `kind
 */

const buttonFontSize = theme.variants('layout', 'kind', {
  small: { compact: '0.9rem', cozy: '1.2rem' },
  medium: { compact: '1rem', cozy: '1.3rem' },
  large: { compact: '1.1rem', cozy: '1.4rem' },
});

/* // defining our Button styled component
 */

const Button = styled.button`
  font-size: ${buttonFontSize};
`;

/* // configure propTypes and defaultProps for Button
 */

Button.propTypes = {
  kind: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  kind: 'medium',
};
/* //////////////////////////////////////////////////////////////////
 */

/* ///////////////////////The <ThemeProvider />////////////////////////////

As demonstrated above, your themes must exist within a <ThemeProvider /> component that defines which theme is currently in use by child components. Theme Providers are contextually defined — in other words, we can overwrite a ThemeProvider further down our component tree:

<ThemeProvider theme={{ mode: 'light' }}>
   <SideBar />
   <ThemeProvider theme={{ mode: 'dark' }}>
      <Content>
   </ThemeProvider>
</ThemeProvider>

In the above JSX, my <SideBar /> will be inheriting light theme styles,
whereas my main <Content /> will be inheriting dark theme styles.

This can be useful for the profile page customisation use case, where
you may wish to keep other sections of the app with a default style,
like your legal, press, or jobs sections.

use styled-components as we would expect in render(),
housing <Wrapper /> within a <ThemeProvider />
 */

/* Styled components are also defined within their respected component
file. This is the beauty of using the package; defining styles where
they are used as opposed to importing a stylesheet
that a multitude of components may be using, decreasing the complexity of
maintaining styles.

Within <ThemeProvider /> we provide a value for the mode theme.
 mode can be referred to as a theme “name”

//////////////////////////////////////////////////////////////////// */

/* ////////////////////// Media Templates ////////////////////// */

/* // configure screen width thresholds
 */

const ScreenSizes = {
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 576,
};

const sizes = {
  desktop: ScreenSizes.DESKTOP,
  tablet: ScreenSizes.TABLET,
  phone: ScreenSizes.PHONE,
};

/* // iterate through sizes and create a media template
 */

const media = Object
  .keys(sizes)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
       @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
       }
      `;
    return acc;
  }, {});

/* // use media methods with styled-component instead of raw @media queries
 */
const StyledContent = styled.div`
  width: 100%
   ${media.desktop`
     padding: 10px;
   `}
   ${media.tablet`
     padding: 15px;
     max-width: 700px;
   `}
   ${media.phone`
     padding: 20px;
     max-width: 900px;
   `}
`;

/* //////////////////////////////////////////////////////////// */
