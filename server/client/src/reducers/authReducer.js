const authReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state || null;
  }
};

export default authReducer;
