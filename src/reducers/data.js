import {
  RECEIVE_API_DATA
} from "../actions/apitypes";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        data: data
      }
    default:
      return state;
  }
};
