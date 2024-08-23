// sagas/apiSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from '../actions/apiActions';

function* fetchDataSaga() {
  try {
    // Make the API call
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    // Dispatch success action with the response data
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    // Dispatch failure action with the error message
    yield put(fetchDataFailure(error.message));
  }
}

// Watcher Saga: Watches for FETCH_DATA_REQUEST action and calls fetchDataSaga
function* watchFetchDataSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default watchFetchDataSaga;
