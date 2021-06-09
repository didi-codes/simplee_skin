import React from 'react';

import logo from './photos/logo.png';

import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs';
import ServiceMenu from './components/ServiceMenu';
import ContactPage from './components/ContactPage';
import CustomerForm from './components/CustomerForm';

import { Link, Route } from 'react-router-dom';


import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo src={logo} alt="logo"/>
      <div className="groupOne">
        <a href="#" class="fa fa-facebook"></a>
        <a href="https://instagram.com/simpleeskincare?igshid=1cy6om00012uo" class="fa fa-instagram"></a>
      </div>
      <div className="groupTwo">
        <nav className="navBar">
          <Link to ="/HomePage" className="home">Home</Link>
          <Link to ="/AboutUs" className="aboutUs">About Us</Link>
          <Link to="/ServiceMenu" className="serviceMenu">Services</Link>
          <Link to="/ContactPage" className="contactPage">Contact Us</Link>
          <Link to="/CustomerForm" className="customerForm">Customer Form</Link>
        </nav>
      </div>
      
      
      <Route path="/HomePage">
        <HomePage />
      </Route>
     <Route path="/ServiceMenu">
        <ServiceMenu />
      </Route>
      <Route path="/ContactPage">
        <ContactPage />
      </Route>
      <Route path="/AboutUs">
        <AboutUs />
      </Route>
      <Route path="/CustomerForm">
        <CustomerForm />
      </Route>
   </div>
    
  );
}
const Logo = styled.img`
  width: 40%;
  margin-left: 29%;
`


export default App;
