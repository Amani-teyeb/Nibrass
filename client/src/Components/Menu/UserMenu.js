import React from 'react'

const UserMenu = () => {
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
                <a className="dashboard-nav-item">
                    <i className="fas fa-users"/>
                profile</a>
                
           
           
              <div className="nav-item-divider"></div>
              <a
                        href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
            </nav>
       </div>
    </div> 
    )
}

export default UserMenu
