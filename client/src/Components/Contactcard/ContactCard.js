import React from 'react'


import './ContactCard.css'
import avatar from '../../assets/Usercard/avatar.png'
import deleteBtn from '../../assets/Usercard/delete.png'
import {useDispatch} from 'react-redux'
import {deleteUser} from "../../Redux/actions/user"


const ContactCard = ({user}) => {
    const dispatch=useDispatch()
    // comment
    return (
        <div className="contact-card">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>{user.Lastname+" "+user.Firstname }</h3>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <div className="delete-edit-btns">
                <img src={deleteBtn} onClick={()=>{dispatch(deleteUser(user._id))}}
                    alt="delete-icon"
                   
                />
                
                  
                
            </div>
        </div>
    )
}

export default ContactCard