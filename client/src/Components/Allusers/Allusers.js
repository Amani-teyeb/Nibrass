import React from 'react'
import "./Allusers.css"
import ContactCard from "../Contactcard/ContactCard"
import {useSelector} from "react-redux"
import {Container, Row, Col} from 'react-bootstrap';
import Layout from '../Layout/Layout'
const Allusers = () => {
    const users=useSelector(state=>state.userReducer.users)
    return (
        <Layout sidebar>
        <Container>
        <Row>
            <Col md={12}>
                <div>
                    <h3>All users</h3>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <div className='card-body'>
                           <div className="contacts-content">
                             <div className="contacts-list">
                              { users.map(user=><ContactCard user={user} key={user._id} />)
                                }
                            </div>
                            </div>
             </div>
            </Col>
        </Row>
        </Container> 
        </Layout>
    //     <div className='dashboard'>
    //     <div className='dashboard-app'>
    //     <header className='dashboard-toolbar'><a href="#!" className="menu-toggle"><i className="fas fa-bars"/></a></header>
    //         <div className='dashboard-content'>
    //             <div className='container'>
    //                 <div className='card'>
    //                     <div className='card-header'>
    //                         <h1>All users</h1>
    //                     </div>
    //                     <div className='card-body'>
    //                       <div className="contacts-content">
    //                          <div className="contacts-list">
    //                          { users.map(user=><ContactCard user={user} key={user._id} />)
    //                            }
    //                       </div>
    //         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>  
    )
}

export default Allusers
