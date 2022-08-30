import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

// import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
const App =()=>{

    const typeOfLogin = [
      "GMAIL",
      "FACEBOOK",
      "GITHUB",
      "MICROSOFT",
      "Twitter",
      "LINKEDIN",
      "Paypal",
      "Instagram"
  
    ];
    
 
    return (
      <div>
        <Router>
                 <Route path="/" render={() => <Login typeOfLogin={typeOfLogin}  />} />
                 </Router>
      </div>
    )
  }





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
