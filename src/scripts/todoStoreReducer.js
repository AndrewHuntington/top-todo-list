const ADD = "ADD";
const DELETE = "DELETE";
const EDIT = "EDIT";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case EDIT:
      return state.map((todo) => {
        if (todo.getId() === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    default:
      return state;
  }
};

export { reducer, ADD, DELETE, EDIT };
