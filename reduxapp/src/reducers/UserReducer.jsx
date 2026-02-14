const initialState = {
    name: "Guest"
  };
  
  function UserReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: "Rahul" };
  
      default:
        return state;
    }
  }
  
  export default UserReducer;
  