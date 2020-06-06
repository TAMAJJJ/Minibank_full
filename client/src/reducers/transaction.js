import {
  GET_ALL_TRANSACTIONS,
  TRANSACTION_ERROR,
  MAKE_TRANSACTION,
  MAKE_TRANSACTION_ERROR
} from '../actions/types';

const initialState = {
  transaction: null,
  transactions: [],
  repos: [],
  loading: true,
  error: []
}

export default function(state = initialState, action) {
  const { type,payload } = action;

  switch (type) {
    case MAKE_TRANSACTION:
    return{
      ...state,
      transaction: payload,
      loading: false
    }
    break;

    case GET_ALL_TRANSACTIONS:
    return{
      ...state,
      transactions: payload,
      loading: false
    }
    break;

    case TRANSACTION_ERROR:
    return{
      ...state,
      error: payload,
      loading: false
    }
    break;

    case MAKE_TRANSACTION_ERROR:
    return{
      ...state,
      error: payload,
      loading: false
    }
    break;
    default:
      return state;

  }
}
