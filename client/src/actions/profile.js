import axios from 'axios';

import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  PROFILE_ERROR,
  CREDIT_DEBIT,
  CREDIT_DEBIT_ERROR
} from './types';

//GET current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

//GET ALL users profile
export const getAllProfiles = () => async dispatch => {
  try {
    //console.log("hii");
    const res = await axios.get('http://localhost:5000/api/profile');
    //console.log(res.data);
    dispatch({
      type: GET_ALL_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

//MAKE credit/debit
export const creditDebit = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    //console.log("hii");
    const res = await axios.put('http://localhost:5000/api/profile/creditdebit',formData,config);
    //console.log(res.data);
    dispatch({
      type: CREDIT_DEBIT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CREDIT_DEBIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
