// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { useDispatch, useSelector} from "react-redux";
// import {updateCourse} from "../../Redux/actions/course";

// const EditCourse = ({match}) => {
//     const courses = useSelector((state) => state.coursesListReducer.courses);
//     const course = courses.find((c) => c._id === match.params.id);

//     const [show, setShow] = useState(false);
//     const dispatch = useDispatch();
//     const handleShow = () => setShow(true);
//     const handleClose = () => setShow(false);
 
//     const [titre, setTitre] = useState("");
//     const [theme, setTheme] = useState("");
//     const [description, setDescription] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateCourse(course._id, {titre, theme, description }));
//         handleClose();
//     };

//     return (
//         <>
//          <Button variant="secondary" onClick={handleShow}>Edit</Button>
           

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit your Task</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <input
//                         className="form-control shadow-none"
//                         name="titre"
//                         type="text"
//                         placeholder="new title"
//                         onChange={(e) => setTitre(e.target.value)}
//                     />
//                 </Modal.Body>
//                 <Modal.Body>
//                     <input
//                         className="form-control shadow-none"
//                         name="theme"
//                         type="text"
//                         placeholder="new theme"
//                         onChange={(e) => setTheme(e.target.value)}
//                     />
//                 </Modal.Body>
//                 <Modal.Body>
//                     <input
//                         className="form-control shadow-none"
//                         name="description"
//                         type="text"
//                         placeholder="new description"
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleSubmit}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default EditCourse;