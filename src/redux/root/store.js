// // store.js
// import { createStore } from 'redux';
// import rootReducer from '../index';

// const store = createStore(rootReducer);

// export default store;


//using saga

// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers';
// import watchFetchDataSaga from './sagas/apiSaga';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(watchFetchDataSaga);

// export default store;


import { createStore } from 'redux';
import rootReducer from '../index'; // Ensure the path to your rootReducer is correct

// Create Redux store with middleware
const store = createStore(
  rootReducer,
);

export default store;


