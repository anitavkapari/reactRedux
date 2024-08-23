// actions/apiActions.js

export const fetchData = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_DATA_REQUEST' });
  
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        });
    };
  };

  
  // actions/apiActions.js
// import axios from 'axios';

// export const fetchData = () => {
//   return (dispatch) => {
//     dispatch({ type: 'FETCH_DATA_REQUEST' });

//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
//       })
//       .catch((error) => {
//         dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
//       });
//   };
// };



// // using saga

// // Action Types
// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// // Action Creators
// export const fetchDataRequest = () => ({
//   type: FETCH_DATA_REQUEST,
// });

// export const fetchDataSuccess = (data) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// export const fetchDataFailure = (error) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error,
// });
