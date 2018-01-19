import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/Material-UI-Elements/Buttons';


class App extends Component {
  render() {
    return (
  <MuiThemeProvider>
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a React Template.  DO NOT EDIT IT. Clone it from Github so you can use it over and over.</h1>
        </header>
        <p className="App-intro">
          This React template uses Material Design in the front end and a Node Server on the backend.
        </p>
      </div>
      <h3> Material Buttons </h3>
      <Buttons />
      
      
      

  </MuiThemeProvider>
    );
  }
}

export default App;
