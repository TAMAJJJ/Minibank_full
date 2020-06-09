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

//MAKE transaction
export const makeTransaction = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    //console.log("hii");
    const res = await axios.post('http://localhost:5000/api/transaction',formData,config);
    //console.log(res.data);
    dispatch({
      type: MAKE_TRANSACTION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MAKE_TRANSACTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
