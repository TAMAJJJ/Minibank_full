import axios from 'axios';

import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  PROFILE_ERROR
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
