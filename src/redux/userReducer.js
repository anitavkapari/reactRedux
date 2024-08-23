// reducers/userReducer.js
const initialState = {
    name: '',
    age: 0,
    salary:0
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_AGE':
        return { ...state, age: action.payload }
        case 'SET_SALARY':
          return { ...state, salary: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  