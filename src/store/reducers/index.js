import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import customerReducer from './customerReducer';

export default combineReducers({
  auth: authReducer,
  brands: brandReducer,
  customers: customerReducer,
});
