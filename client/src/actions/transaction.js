import axios from 'axios';

import {
  GET_ALL_TRANSACTIONS,
  TRANSACTION_ERROR,
  MAKE_TRANSACTION,
  MAKE_TRANSACTION_ERROR
} from './types';


//GET ALL users profile
export const getAllTransactions = () => async dispatch => {
  try {
    //console.log("hii");
    const res = await axios.get('http://localhost:5000/api/transaction');
    //console.log(res.data);
    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
