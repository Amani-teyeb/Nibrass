const { ADD_TASK, GET_TASK } = require("../constants/todos");

const initialState = {
  todos: [],
  load: false,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK: {
      return {
        ...state,
        todos: [payload,...state.todos],
        load: false,
      };
    }
    case GET_TASK: {
      return {
        ...state,
        load: false,
        todos: payload,
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
