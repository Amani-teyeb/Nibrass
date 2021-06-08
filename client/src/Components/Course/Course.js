import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../../Redux/actions/course";
import "./course.css";

const Course = ({ match, location, history }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listCourses());
    }, []);

    const courses = useSelector((state) => state.coursesListReducer.courses);
    const course = courses.find((c) => c._id === match.params.id);
    console.log(course);
   
    return (
        <div>
        <div className="container py-4 my-4 mx-auto d-flex flex-column">
            <div className="container-body mt-4">
                <div className="row r3">
                    <div className="col-md-7">
                    <iframe src={course && course.url} className='iframeBook' style={{width:'100%', heigh:'500px'}} > </iframe>
                    </div>
                    <div className="col-md-5 p-0 klo">
                                <p>
                                    {" "}
                                    <span style={{ fontWeight: "bold" }}>
                                        Description :
                                    </span>
                                    {course && course.description}
                                </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Course
