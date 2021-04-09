import {
    REQUEST_API_DATA, RECEIVE_API_DATA,

} from './apitypes';

export const requestApiData = (obj) => ({ type: REQUEST_API_DATA, obj });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
