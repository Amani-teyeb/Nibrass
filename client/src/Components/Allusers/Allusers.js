import React from 'react'
import "./Allusers.css"
import ContactCard from "../Contactcard/ContactCard"
import {useSelector} from "react-redux"
const Allusers = () => {
    const users=useSelector(state=>state.userReducer.users)
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
                <a href="#" className="dashboard-nav-item">
                    <i className="fas fa-users"/>
                All Users </a>
                
           
           
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
                            <h1>All users</h1>
                        </div>
                        <div className='card-body'>
                          <div className="contacts-content">
                             <div className="contacts-list">
                             { users.map(user=><ContactCard user={user} key={user._id} />)
                               }
                          </div>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default Allusers
