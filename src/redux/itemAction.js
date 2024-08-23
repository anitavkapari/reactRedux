export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItemsRequest = () => ({ type: FETCH_ITEMS_REQUEST });
export const fetchItemsSuccess = items => ({ type: FETCH_ITEMS_SUCCESS, payload: items });
export const fetchItemsFailure = error => ({ type: FETCH_ITEMS_FAILURE, payload: error });
