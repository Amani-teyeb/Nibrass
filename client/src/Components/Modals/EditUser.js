import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Redux/actions/user"

const EditUser = () => {
    const user = useSelector((state) => state.userReducer.user);
  
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(update(user._id, {firstname, lastname, password, image}));
        handleClose();
    };

    return (
        <>
            <a href="#" className="btn btn-dark btn-sm btn-block" onClick={handleShow} >
                    Edit profile
                  </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="firstname"
                        type="text"
                        placeholder="new name"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="lastname"
                        type="text"
                        placeholder="new name"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="password"
                        type="text"
                        placeholder="new password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="image"
                        type="text"
                        placeholder="new image"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditUser;