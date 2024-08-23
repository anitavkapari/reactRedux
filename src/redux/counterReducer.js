// reducers/counterReducer.js
const initialState = {
    count: 0,
    page : 'ReduxValue'
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
        case 'Page':
          return { ...state, page: action.payload };
          
      default:
        return state;
    }
  };
  
  export default counterReducer;
  