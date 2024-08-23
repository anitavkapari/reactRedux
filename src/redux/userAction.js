// actions/userActions.js

// Action Types
export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';
export const SET_SALARY = 'SET_SALARY';

// Action Creators

// Action to set the user's name
export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,  // The new name to be stored in the state
  };
};

// Action to set the user's age
export const setAge = (age) => {
  return {
    type: SET_AGE,
    payload: age,  // The new age to be stored in the state
  };
};

// Action to set the user's age
export const setSalary = (salary) => {
    return {
      type: SET_SALARY,
      payload: salary,  // The new age to be stored in the state
    };
  };
