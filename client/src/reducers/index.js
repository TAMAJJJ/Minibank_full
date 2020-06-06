import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import bank from './bank';
import transaction from './transaction';

export default combineReducers({
  alert,
  auth,
  profile,
  bank,
  transaction
});
