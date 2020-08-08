import React from "react";
import "./../css/style.css";
import Counter from "../ClassvsHooks/Counter/CounterClass";
import CounterHooks from "../ClassvsHooks/Counter/CounterHooks";
import {Toggler}  from '../ClassvsHooks/Toggler/Toggler';
import SimpleformHooks from "../ClassvsHooks/Form/SimpleFormhooks";
import Clicker from "../ClassvsHooks/useEffect/Clicker";
import SWMovies from "../ClassvsHooks/useEffect/SWMovies";
import SWMovies2 from "../ClassvsHooks/useEffect/SWMoviesv2";
import TodoApp from "../TodoApp"


////////////////////// Styled Theming Example ////////////////////
import styled, {css, ThemeProvider} from 'styled-components'
import PropTypes from 'prop-types'; // ES6


export default function VanillaThemingApp() {
  return (

        <TodoApp />

  );
}


/* https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/ */