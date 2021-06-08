import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";
import { listCourses } from "../../Redux/actions/course";
import Load from "../Load/Load";
const Courses = ({ searchItem }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCourses());
    }, []);
    const Courses = useSelector((state) => state.coursesListReducer.courses);
    const load = useSelector((state) => state.coursesListReducer.load);
    return  load ?(
      
      <Load/>
    ) : (
        <Row>
            {Courses &&
                Courses
                    .filter((val) =>
                        val.titre
                            .toLowerCase()
                            .includes(searchItem.toLowerCase())
                    )
                    .map((course) => (
                        <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
                            <CourseCard course={course} />
                        </Col>
                    ))}
        </Row>
);
};
export default Courses
