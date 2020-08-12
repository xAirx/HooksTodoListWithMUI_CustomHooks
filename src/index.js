import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VanillaThemingApp from './VanillaThemingExample/VanillaThemingApp';
import * as serviceWorker from './serviceWorker';
import StyledThemingApp from './StyledThemingExample/StyledThemingApp';
import MUIApp from './MUIthemeExample/MUIApp';

ReactDOM.render(
  <React.StrictMode>
    {/*     <VanillaThemingApp /> */}
    <MUIApp />
    {/* <StyledThemingApp/> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
