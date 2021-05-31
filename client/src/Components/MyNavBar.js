import React from "react";
import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import Nibrass from '../assets/home/Nibrass.jpg'




const MyNavbar = () => {
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
      <img
            src={Nibrass}  
            alt="logo"
            width="120px"
            height="115px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
       
        
        <NavLink to ="/login" className = "nav-link ml-5" style={{fontSize:'1.6em'}} >وثائق مجانية
        </NavLink>
      
        <NavLink to ="/login" className = "nav-link ml-5"style={{fontSize:'1.6em'}}>المكتبة الرقمية
        </NavLink>
      
        <NavLink to ="/login" className = "nav-link ml-5" style={{fontSize:'1.6em'}}>الملف الشخصي
        </NavLink>
   
        <NavLink to ="/home" className = "nav-link ml-5"style={{fontSize:'1.6em'}}>الدروس
        </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
  )
};

export default MyNavbar