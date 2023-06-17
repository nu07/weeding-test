const initialState = {
  name: "Wisnu",
};

const HomePageReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
};

export default HomePageReducer;
