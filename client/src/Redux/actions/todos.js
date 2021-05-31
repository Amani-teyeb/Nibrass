
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from "../constants/todos";
import axios from "axios";

export const addTask = ({task}) => async (dispatch) => {
  try {
    let result = await axios.post("/api/todo/add", task);
    //succees action
    dispatch({ type: ADD_TASK, payload: result.data }); 
 
  } catch (error) {
    // fail
    console.log(error)
  }
};
// export const addTask = ({task}) => async (dispatch) => {
//   try {
//     let result = await axios.post("/api/todo/add", task);
//     //succees action
//     dispatch({ type: ADD_TASK, payload: result.data }); 
 
//   } catch (error) {
//     // fail
//     console.log(error)
//   }
// };

export const toggleTask = (payload) => {
  return {
    type: TOGGLE_TASK,
    payload: payload,
  };
};

