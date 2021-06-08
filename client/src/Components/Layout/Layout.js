  
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';
import './Layout.css';
import {getUsers} from "../../Redux/actions/user"
import {useDispatch} from 'react-redux'
import AdminMenu from "./AdminMenu" 



/**
* @author
* @function Layout
**/

const Layout = (props) => {
  const dispatch=useDispatch()
         //comment
         const handleChange = () => {
            dispatch(getUsers());
          };
  return(
    <>
      <AdminMenu/>
       {
         props.sidebar ?
         <Container fluid>
          <Row>
            <Col md={2} className="sidebar" style={{paddingTop: '100px' }}>
            <header>
            <a href="#" className="brand-logo">
                <i className="fas fa-school"/><span>Nibrass </span></a></header>
              <ul>
                <li><NavLink exact to={`/adminhome`}><i className="fas fa-home"/> Home</NavLink></li>
                <li><NavLink to={`/allusers`} onClick={handleChange} > <i className="fas fa-users"/> All Users</NavLink></li>
                <li><NavLink to={`/addcourse`}> <i className="fas fa-book-reader"/> Cources</NavLink></li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
              {props.children}
            </Col>
          </Row>
        </Container>
        :
        props.children
       }
        
        
    </>
   )

 }

export default Layout;