
const {
  ADD_TASK,
  TOGGLE_TASK,
  
} = require("../constants/todos");


const initialState = {
  todos: [],
};

const todosReducer= (state = initialState, { type, payload }) =>{
  
  switch (type) {
    case ADD_TASK: {
      return {
        todos: [
          ...state.todos,
          {task: payload.task},
        ],
      };
    }
    // case TOGGLE_TASK: {
    //   return {
    //     todos: state.todos.map((task) =>
    //       task.id === payload.id ? { ...task, isDone: !task.isDone } : task
    //     ),
    //   };
    // }
    
    default:
      return state;
  }
};
export default todosReducer;