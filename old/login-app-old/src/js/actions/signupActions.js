import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {  //dispatch is used because thunk needs (a function returning a function of dispatch)
    //return axios.post('/api/users', userData);
    return Promise.resolve('Success');


  }//dispatch
}
