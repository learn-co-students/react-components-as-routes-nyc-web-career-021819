import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import about from './about'
import home from './home'
import login from './login'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/" 
      exact 
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;


ReactDOM.render((
  <Router>
    <React.Fragment>
      < Navbar />
      <Route path="/" component={home} />
      <Route exact path="/about" component={about} />
      <Route exact path="/login" component={login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
