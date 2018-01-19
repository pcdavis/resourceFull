import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';  - NOTE: comment these out during dev because it will cache your css on browser preventing you from seeing frequent changes

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();


//Dev Notes:
//Notes: I added 2 things: "main":"server/index.js" so that nodemon automatically knows where to go to look for the server
// and also "proxy": "http://localhost:3001" which allows the server to work on port 3001 instead of the default 3000, which is
// where React automatically starts.