import { ADD_TASK, TOGGLE_TASK, GET_TASK } from "../constants/todos";
import axios from "axios";

export const addTask = (task) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let result = await axios.post("/api/todo/add", task, config);
    //succees action
    dispatch({ type: ADD_TASK, payload: result.data });
    dispatch(getTask())
  } catch (error) {
    // fail
    console.log(error);
  }
};

export const getTask = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let result = await axios.get("/api/todo/get", config);
    //succees action
    dispatch({ type: GET_TASK, payload: result.data });
  } catch (error) {
    // fail
    console.log(error);
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
