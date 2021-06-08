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

const initialState = {
    courses: [],
    errors: [],
    load: false,
};

export const coursesListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COURSES_LOAD:
            return { ...state, load: true };
        case GET_COURSES_SUCCESS:
            return { ...state, load: false, courses: payload };
        case GET_COURSES_FAIL:
            return { ...state, load: false, errors: payload };
        case COURSE_DETAILS_LOAD:
            return { load: true, ...state };
        case COURSE_DETAILS_SUCCESS:
            return { load: false, course: payload, ...state };
        case COURSE_DETAILS_FAIL:
            return { load: false, error: payload, ...state };
        default:
            return state;
    }
};

export const addCourseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COURSE_LOAD:
            return { load: true, ...state };
        case ADD_COURSE_SUCCESS:
            return { load: false, course: payload, ...state };
        case ADD_COURSE_FAIL:
            return { load: false, error: payload, ...state };

        default:
            return state;
    }
};

export const editCourseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_EDITCOURSE:
            return { load: true, ...state };
        case EDITCOURSE_SUCCESS:
            return { load: false, ...state };
        case FAIL_EDITCOURSE:
            return { load: false, ...state };

        default:
            return state;
    }
};
