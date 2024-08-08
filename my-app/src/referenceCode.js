import logo from './logo.svg';
import './App.css';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


import React from 'react';
import Home from './home'
import { createRoot } from 'react-dom/client';
import App from './navRender';
import { BrowserRouter } from 'react-router-dom';
import ClassComponentDemo from './classcomponent'
import FunctionalComponent from './functionalcomponent'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App /> 
    <Home />
    <FunctionalComponent />
    <ClassComponentDemo />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import {Link, Route} from "react-router-dom";
import signupFormComponent from './signup'
import loginFormComponent from './login'
import functionalcomponent from './functionalcomponent'
import classcomponent from './classcomponent'

function NavBar1() {
    return(
        <div>  
            <Link to="/">home</Link> &nbsp;
            <Link to="/login">Login</Link> &nbsp;
            <Link to="/signup">Signup</Link> &nbsp;
            <Link to="/functionalcomponent"> functionalComponent</Link> &nbsp;
            <Link to="/classcomponent"> classcomponent</Link> &nbsp;

            <Route path="/login" component={loginFormComponent} />
            <Route path="/signup" componen={signupFormComponent} />
            <Route path="/functionalcomponent" component={functionalcomponent} />
            <Route path="/classcomponent" component={classcomponent} exact/>


        </div>
    );
}

export default NavBar1
