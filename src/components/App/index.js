import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../constants/Routes';
import { createGlobalStyle } from 'styled-components';

function App() {
    const GlobalStyle = createGlobalStyle`
  body {
    text-align:center;
    padding:0;
    margin:0;
    background-color: #1b2431;
    font-family: 'Roboto', sans-serif;
  }
`;

    return (
        <React.Fragment>
            <GlobalStyle />
            <Router>
                <Routes />
            </Router>
        </React.Fragment>
    );
}

export default App;