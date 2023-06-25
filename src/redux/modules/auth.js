const TOGGLE_AUTH = "auth/TOGGLE_AUTH";

export const toggleAuth = () => {
  return { type: TOGGLE_AUTH };
};

const initialState = {
  isLogin: false,
};

const auth = (state = initialState, action) => {
  console.log("auth 리듀서 호출!");
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, isLogin: !state.isLogin };
    default:
      return state;
  }
};

export default auth;
