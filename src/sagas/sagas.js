import { call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_API_DATA,
} from "../actions/apitypes";

import {
  receiveApiData,
} from "../actions/actions";

import {
  fetchData,
} from "./api";

function* getApiData(action) {
  try {
    const data = yield call(fetchData, action.obj);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}


export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
