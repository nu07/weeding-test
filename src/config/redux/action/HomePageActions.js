export const setNameReducer = (name) => (dispatch) => {
  dispatch({ type: "UPDATE_NAME", payload: name });
};
