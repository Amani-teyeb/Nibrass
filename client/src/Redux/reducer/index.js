  
import { combineReducers } from "redux";
import todosReducer from "./todos";
import userReducer from "./user"
import {coursesListReducer, addCourseReducer, editCourseReducer} from "./course";

const rootReducer = combineReducers({userReducer, todosReducer, coursesListReducer, addCourseReducer, editCourseReducer});
export default rootReducer;