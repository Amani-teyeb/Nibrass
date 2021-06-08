import React from "react";
import { Card, Col, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { courseDetails } from "../../Redux/actions/course";
const CourseCard = ({ course }) => {
    const myCourse = () => dispatch(courseDetails(course._id));
    const token = localStorage.getItem("token");
    console.log(token);
    const dispatch = useDispatch();

    return (
        <Card
            onClick={() => myCourse()}
            className="my-3 p-3 rounded"
            style={{
                height: "90vh",
            }}
        >
            <Link
                to={`/courses/${course._id}`}
                style={{ textDecoration: "none" }}
            >
                <Card.Header>
                <Card.Img
                        style={{ width: "200px", height: "200px" }}
                        src={course.image}
                        variant="top"
                        className="img-fluid my-2 p-2"
                    />
                </Card.Header>

                <Card.Body>
                  <Card.Title as="h2" style={{ textAlign: "center" }}>
                        <strong>{course.titre}</strong>
                    </Card.Title>
                    <Card.Text
                        as="div"
                        style={{
                            color: "black",
                            fontSize: "22px",
                            textAlign: "center",
                        }}
                    >
                    </Card.Text>
                    <Card.Text as="h4" style={{ textAlign: "center" }}>
                        Niveau: {course.level}
                    </Card.Text>
                    <Card.Text as="h4" style={{ textAlign: "center" }}>
                        Thème: {course.theme}
                    </Card.Text>
                </Card.Body>
            </Link>
                <Row>
                    <Link
                        to={`/courses/${course._id}`}
                        className="btn btn-info "
                        
                    >
                        Ajouter aux favouris
                    </Link>
                </Row>
        </Card>
    );
};

export default CourseCard;