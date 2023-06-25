const ADD_TODO = "todos/ADD_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

const initialState = [];

const todos = (state = initialState, action) => {
  console.log("todos 리듀서 호출!");
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
