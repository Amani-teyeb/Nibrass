import React from 'react';
import "./AdminDashboard.css";
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import {getUsers} from "../../Redux/actions/user"

const AdminDashboard = () => {
    const dispatch=useDispatch()
         //comment
         const handleChange = () => {
            dispatch(getUsers());
          };
    return (
    
        <div className='dashboard'>
        <div className="dashboard-nav">
            <header>
            <a href="#" className="brand-logo">
                <i className="fas fa-school"/><span>Nibrass </span></a></header>
            <nav className="dashboard-nav-list">
                <a href="#" className="dashboard-nav-item">
                    <i className="fas fa-home"/>
                Home </a>
                <Link to="/allusers" className="dashboard-nav-item" onClick={handleChange} >
                    <i className="fas fa-users"/>
                All Users </Link>
                
           
           
              <div className="nav-item-divider"></div>
              <a
                        href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
            </nav>
        </div>
        <div className='dashboard-app'>
        <header className='dashboard-toolbar'><a href="#!" className="menu-toggle"><i className="fas fa-bars"/></a></header>
            <div className='dashboard-content'>
                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Welcome back Admin</h1>
                        </div>
                        <div className='card-body'>
                            <p>Your account type is: Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default AdminDashboard
