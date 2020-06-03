import axios from 'axios';

import {
  GET_BANK,
  BANK_ERROR
} from './types';

//GET salt bank profile
export const getCurrentBank = () => async dispatch => {
  try {
    console.log('hi');
    const res = await axios.get('http://localhost:5000/api/bank/info');

    dispatch({
      type: GET_BANK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
