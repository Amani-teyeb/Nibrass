import axios from "axios";
import {
    GET_COURSES_FAIL,
    GET_COURSES_SUCCESS,
    GET_COURSES_LOAD,
    COURSE_DETAILS_LOAD,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    ADD_COURSE_FAIL,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_LOAD,
    LOAD_EDITCOURSE,
    EDITCOURSE_SUCCESS,
    FAIL_EDITCOURSE

} from "../constants/course";

export const  listCourses = () => async (dispatch) => {
    dispatch({ type: GET_COURSES_LOAD });

    try {
        const result = await axios.get("/api/course/get");

        dispatch({
            type: GET_COURSES_SUCCESS,
            payload: result.data.courses,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_COURSES_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        });
    }
};

export const courseDetails = (id) => async (dispatch) => {
    dispatch({ type: COURSE_DETAILS_LOAD });

    try {
        const { data } = await axios.get(`/api/course/${id}`);

        await dispatch({
            type: COURSE_DETAILS_SUCCESS,
            payload: data,
        });
        console.log(data);
    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        });
    }
};

export const addCourse = (course, history) => async (dispatch) => {
    dispatch({ type: ADD_COURSE_LOAD });
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const result = await axios.post("/api/course/add", course);
        dispatch({ type: ADD_COURSE_SUCCESS, payload: result.data, config });
        history.push("/addcourse");
    } catch (error) {
        dispatch({ type: ADD_COURSE_FAIL, payload: error.data });
    }
};

export const updateCourse = (id, course) => async (dispatch) => {
    dispatch({ type: LOAD_EDITCOURSE });
    try {
        let result = await axios.put(`/api/course/${id}`, course);
        dispatch({ type: EDITCOURSE_SUCCESS, payload: result.data });
        dispatch(listCourses());
    } catch (error) {
        console.log(error)
        dispatch({ type: FAIL_EDITCOURSE, payload: error.data });
    }
};