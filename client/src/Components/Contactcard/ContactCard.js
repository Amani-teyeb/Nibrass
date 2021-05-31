import React from 'react'
import {Link} from 'react-router-dom'

import './ContactCard.css'
import editBtn from '../../assets/Usercard/edit.png'
import avatar from '../../assets/Usercard/avatar.png'
import deleteBtn from '../../assets/Usercard/delete.png'



const ContactCard = ({user}) => {

    return (
        <div className="contact-card">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>userName</h3>
            <span>email</span>
            <span>phone</span>
            <div className="delete-edit-btns">
                <img src={deleteBtn}
                    alt="delete-icon"
                   
                />
                
                   <Link to='/'>
                   <img src={editBtn}
                        alt="edit-icon"
                        
                    />
                   </Link>
                
            </div>
        </div>
    )
}

export default ContactCard