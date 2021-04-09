import { makeRequest } from '../api/apiCall';

export const fetchData = async (obj) => {
  try {
    return makeRequest(obj.url, 'get'
    ).then(response => {
      console.log("Google Place API data", JSON.stringify(response.data))
      return response.data
    }).catch(err => {
      console.log("err", JSON.stringify(err))
    })
  } catch (e) {
    console.log(e);
  }
};